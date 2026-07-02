"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "./container";
import { services as ALL_SERVICES } from "./allServices";

const DEFAULT_SERVICES = ALL_SERVICES.flatMap((s) => [
  s.title,
  ...(Array.isArray(s.services) ? s.services : []),
]);

export default function ServiceDetails({ services = DEFAULT_SERVICES }) {
  // distribute items across 3 columns by index
  const cols = [[], [], []];
  services.forEach((s, i) => cols[i % 3].push(s));

  return (
    <section className=" mb-20 px-5 sm:px-8 lg:px-0 ">
      <Container className="rounded-[40px] border-2 border-neutral-200 p-6 sm:p-8 transition-colors duration-300 ease-in hover:border-black md:p-12">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 font-satoshiBold text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Capabilities
            </span>
            <h2 className="mt-4 font-excon text-[34px] leading-[0.95] tracking-[-0.02em] text-black sm:text-[44px]">
              Everything we offer
            </h2>
          </div>
          <p className="max-w-xs font-satoshiRegular text-[15px] leading-[1.6] text-neutral-500">
            A full-stack studio for design, development, branding and video —
            {" "}
            <span className="font-satoshiBold text-black">
              {services.length}+ services
            </span>{" "}
            under one roof.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-x-14 md:grid-cols-3">
          {cols.map((col, ci) => (
            <ul key={ci} className="border-t border-neutral-200">
              {col.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-3 border-b border-neutral-200 py-4 font-satoshiBold text-[15px] text-neutral-600 transition-colors duration-300 hover:text-black md:text-base"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300 transition-colors duration-300 group-hover:bg-black" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* CTA panel */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-black p-8 text-white sm:flex-row sm:items-center">
          <div>
            <h3 className="font-excon text-[26px] leading-tight tracking-[-0.02em]">
              Don&apos;t see what you need?
            </h3>
            <p className="mt-2 font-satoshiRegular text-[15px] text-white/60">
              We build custom too. Tell us about your project.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex shrink-0 cursor-none items-center gap-2 rounded-full bg-white px-7 py-4 font-satoshiBold text-[15px] text-black shadow-[10px_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[10px_10px_40px_rgba(255,255,255,0.25)]"
          >
            Ask us
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
