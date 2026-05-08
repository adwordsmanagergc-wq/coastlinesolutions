import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface QuotePayload {
  name?: string;
  phone?: string;
  email?: string;
  suburb?: string;
  services?: string[] | string;
  description?: string;
  bestTime?: string;
  consent?: string;
  company?: string;
}

export async function POST(req: Request) {
  let body: QuotePayload;
  try {
    body = (await req.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const required = ["name", "phone", "email", "suburb", "description"] as const;
  for (const key of required) {
    if (!body[key] || String(body[key]).trim().length === 0) {
      return NextResponse.json(
        { error: `Missing required field: ${key}` },
        { status: 400 }
      );
    }
  }

  const services = Array.isArray(body.services)
    ? body.services
    : body.services
      ? [body.services]
      : [];

  const summary = [
    `New quote request — LayMac Solutions`,
    ``,
    `Name:        ${body.name}`,
    `Phone:       ${body.phone}`,
    `Email:       ${body.email}`,
    `Suburb:      ${body.suburb}`,
    `Services:    ${services.join(", ") || "Not specified"}`,
    `Best time:   ${body.bestTime || "Anytime"}`,
    ``,
    `Description:`,
    body.description,
    ``,
    `Sent from coastlinesolutions.com.au`
  ].join("\n");

  await sendEmail(summary, body);
  await sendSms(body, services);

  return NextResponse.json({ ok: true });
}

async function sendEmail(text: string, body: QuotePayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL || "admin@coastlinesolutions.com.au";
  const from = process.env.QUOTE_FROM_EMAIL || "quotes@coastlinesolutions.com.au";

  if (!apiKey) {
    console.log("[quote] RESEND_API_KEY not set — would email:", text);
    return;
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: body.email,
        subject: `Quote request — ${body.name} (${body.suburb})`,
        text
      })
    });
  } catch (err) {
    console.error("[quote] email send failed", err);
  }
}

async function sendSms(body: QuotePayload, services: string[]) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.BLAKE_MOBILE;

  const msg = `New quote: ${body.name} (${body.suburb}) — ${services.join("/") || "service TBD"}. Ph ${body.phone}.`;

  if (!sid || !token || !from || !to) {
    console.log("[quote] Twilio not configured — would SMS:", msg);
    return;
  }

  try {
    const params = new URLSearchParams({ To: to, From: from, Body: msg });
    await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });
  } catch (err) {
    console.error("[quote] SMS send failed", err);
  }
}
