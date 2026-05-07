"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, unknown> = {};
    data.forEach((value, key) => {
      if (key === "services") {
        payload.services = data.getAll("services");
      } else {
        payload[key] = value;
      }
    });

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-seafoam/30 p-8 text-navy">
        <h3 className="text-2xl font-bold">Thanks — message received.</h3>
        <p className="mt-2">
          Blake will be in touch shortly, usually within one business day. If
          it&apos;s urgent, give him a call on{" "}
          <a className="font-semibold underline" href="tel:+61452263112">
            0452 263 112
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="sm:col-span-2"
        />
        <Field
          label="Suburb / postcode"
          name="suburb"
          required
          autoComplete="postal-code"
          className="sm:col-span-2"
        />
      </div>

      <fieldset className="rounded-xl border border-navy/10 p-4">
        <legend className="px-2 text-sm font-semibold text-navy">Service required</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {services.map((s) => (
            <label key={s.slug} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="services"
                value={s.name}
                className="h-4 w-4 rounded border-navy/30 text-coast focus:ring-coast"
              />
              {s.name}
            </label>
          ))}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="services"
              value="Not sure"
              className="h-4 w-4 rounded border-navy/30 text-coast focus:ring-coast"
            />
            Not sure
          </label>
        </div>
      </fieldset>

      <div className="grid gap-1">
        <label htmlFor="description" className="text-sm font-medium text-navy">
          Brief description of the job
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          className="rounded-xl border border-navy/15 bg-white px-3.5 py-2.5 text-sm shadow-sm focus:border-coast focus:outline-none focus:ring-2 focus:ring-coast/20"
        />
      </div>

      <Field
        label="Best time to contact you"
        name="bestTime"
        placeholder="e.g. weekdays after 4pm"
      />

      <label className="flex items-start gap-3 text-sm text-navy/80">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-navy/30 text-coast focus:ring-coast"
        />
        <span>
          I&apos;m happy for Coastline Solutions to contact me about my quote.
        </span>
      </label>

      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send my quote request"}
        </button>
        <p className="text-xs text-navy/60">
          We usually reply within one business day. Free, no-obligation.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-coast" role="alert">
          {error || "Sorry — please try again or call Blake directly."}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  className = ""
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-1 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label}
        {required && <span className="text-coast"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="rounded-xl border border-navy/15 bg-white px-3.5 py-2.5 text-sm shadow-sm focus:border-coast focus:outline-none focus:ring-2 focus:ring-coast/20"
      />
    </div>
  );
}
