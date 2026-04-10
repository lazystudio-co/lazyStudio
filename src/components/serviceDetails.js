"use client";

import Link from "next/link";
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
    <section className=" mb-20 ">
      <Container className=" border border-black/20 rounded-3xl p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cols.map((col, ci) => (
            <ul key={ci} className="space-y-4">
              {col.map((item, i) => (
                <li key={i} className="text-black text-base md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold"
          >
            Don’t see it? <span className="underline">Ask us</span>
            <span className="ml-2 w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
