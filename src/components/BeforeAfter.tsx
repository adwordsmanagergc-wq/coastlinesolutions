"use client";

import { useState } from "react";

export default function BeforeAfter({
  before,
  after,
  label
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [pos, setPos] = useState(50);
  return (
    <figure className="overflow-hidden rounded-2xl bg-navy/5 ring-1 ring-navy/10">
      <div className="relative aspect-[4/3] w-full select-none">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${after} 0%, ${after} 60%, rgba(0,0,0,0.05) 100%)`
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
          aria-hidden="true"
        >
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(135deg, ${before} 0%, ${before} 60%, rgba(0,0,0,0.15) 100%)`,
              filter: "saturate(0.55) brightness(0.85)"
            }}
          />
          <div className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            Before
          </div>
        </div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-coast px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          After
        </div>
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow"
          style={{ left: `calc(${pos}% - 1px)` }}
          aria-hidden="true"
        />
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${label} before-and-after slider`}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
      <figcaption className="border-t border-navy/10 bg-white px-4 py-3 text-sm font-medium text-navy">
        {label}
      </figcaption>
    </figure>
  );
}
