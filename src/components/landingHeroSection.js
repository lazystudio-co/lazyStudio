"use client";

import { useEffect, useRef, useState } from "react";

const MOCK_DASHBOARD_ROWS = [
  { id: "INV-1232", status: "Outstanding", amount: "$390.00", due: "$390.00" },
  { id: "INV-1231", status: "Paid", amount: "$123.50", due: "$0.00" },
  { id: "INV-1230", status: "Overdue", amount: "$46.00", due: "$46.00" },
  { id: "INV-1229", status: "Paid", amount: "$340.00", due: "$0.00" },
  { id: "INV-1228", status: "Outstanding", amount: "$112.40", due: "$112.40" },
];

const WIREFRAME_ROWS = [
  [3, 2, 1],
  [2, 3, 2],
  [1, 2, 3],
  [3, 1, 2],
  [2, 2, 2],
  [3, 3, 1],
  [1, 3, 2],
];

const STATUS_COLORS = {
  Outstanding: "bg-amber-100 text-amber-700",
  Paid: "bg-emerald-100 text-emerald-700",
  Overdue: "bg-rose-100 text-rose-700",
};

const ROW_DESCRIPTIONS = [
  "Prophylaxis clean",
  "Comprehensive Oral Evaluation",
  "Panoramic X-ray",
  "Fluoride treatment",
  "Restorative filling",
];

function StatusBadge({ status }) {
  const colorClass = STATUS_COLORS[status] ?? "bg-gray-100 text-gray-600";
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${colorClass}`}
    >
      {status}
    </span>
  );
}

function MockDashboard() {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#0f0f1a] border border-white/10">
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-4 text-[11px] text-white/30 font-mono">
          Invoice #1232 — Outstanding
        </span>
      </div>

      <div className="flex h-[calc(100%-40px)]">
        {/* Sidebar */}
        <div className="w-[130px] border-r border-white/10 py-4 px-3 flex flex-col gap-3 shrink-0">
          <div className="text-[10px] font-bold tracking-widest text-white/30 uppercase mb-1">
            denden
          </div>
          {[
            "Tasks",
            "Checklists",
            "Messaging",
            "AI assistant",
            "Schedule",
            "Patients",
            "Billing",
            "Reporting",
            "Opportunities",
            "Notifications",
          ].map((item) => (
            <div
              key={item}
              className={`text-[11px] py-1 px-2 rounded-md flex items-center gap-2 cursor-pointer transition-colors ${item === "Billing"
                ? "bg-lime/80 text-black font-semibold"
                : "text-white/40 hover:text-white/70"
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/80 text-sm font-semibold">
              Invoices
            </span>
            <button className="text-[10px] bg-lime/80 text-black px-3 py-1 rounded-full font-semibold hover:bg-lime transition-colors">
              + Add Invoice
            </button>
          </div>

          {/* Table */}
          <div className="rounded-lg overflow-hidden border border-white/10">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-white/5 text-white/30">
                  <th className="text-left px-3 py-2 font-medium">Code</th>
                  <th className="text-left px-3 py-2 font-medium">
                    Description
                  </th>
                  <th className="text-left px-3 py-2 font-medium">Status</th>
                  <th className="text-right px-3 py-2 font-medium">Amount</th>
                  <th className="text-right px-3 py-2 font-medium">Due</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_DASHBOARD_ROWS.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`border-t border-white/5 transition-colors hover:bg-white/5 ${i === 0 ? "bg-sec" : ""
                      }`}
                  >
                    <td className="px-3 py-2 text-white/60 font-mono">
                      {row.id}
                    </td>
                    <td className="px-3 py-2 text-white/50">
                      {ROW_DESCRIPTIONS[i]}
                    </td>
                    <td className="px-3 py-2">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-3 py-2 text-right text-white/60">
                      {row.amount}
                    </td>
                    <td className="px-3 py-2 text-right text-white/80 font-semibold">
                      {row.due}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom summary */}
          <div className="mt-3 flex justify-end gap-6 text-[10px] text-white/40">
            <span>
              Payments:{" "}
              <span className="text-emerald-400 font-semibold">-$110.00</span>
            </span>
            <span>
              Adjustments:{" "}
              <span className="text-amber-400 font-semibold">-$58.00</span>
            </span>
            <span>
              Total: <span className="text-white font-bold">$155.40</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WireframePanel() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-black border border-black/20 p-4">
      <div className="grid grid-cols-2 gap-3 h-full">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col gap-2">
            <div className="text-[9px] font-mono text-white/50 mb-1">
              Frame 141012{col === 0 ? "9397" : "9415"}
            </div>
            {WIREFRAME_ROWS.map((row, ri) => (
              <div key={ri} className="flex gap-1.5 items-center">
                {row.map((span, ci) => {
                  const isPink = (ri + ci) % 5 === 0;
                  const isPurple = (ri * 3 + ci) % 4 === 0;
                  return (
                    <div
                      key={ci}
                      style={{ flex: span }}
                      className={`h-3 rounded-sm ${isPink
                        ? "bg-pink-400/70"
                        : isPurple
                          ? "bg-purple-400/40"
                          : "bg-white/15"
                        }`}
                    />
                  );
                })}
              </div>
            ))}
            <div className="mt-1 flex gap-1.5">
              <div className="flex-1 h-5 bg-white/10 rounded-sm" />
              <div className="w-8 h-5 bg-pink-500/50 rounded-sm" />
            </div>
            {WIREFRAME_ROWS.slice(0, 4).map((row, ri) => (
              <div key={"b" + ri} className="flex gap-1.5 items-center">
                {[...row].reverse().map((span, ci) => (
                  <div
                    key={ci}
                    style={{ flex: span }}
                    className={`h-2.5 rounded-sm ${(ri + ci) % 6 === 0 ? "bg-pink-400/60" : "bg-white/10"
                      }`}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LandingHeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-white overflow-hidden flex flex-col justify-center w-full "
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="relative z-10 mx-auto px-5 sm:px-8 lg:px-10 2xl:px-0 py-20 w-full"
        style={{ maxWidth: "1400px" }}
      >
        {/* Header Row */}
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Left headline */}
          <div className="max-w-xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-CabinetGrotesk leading-[1.05] tracking-tight text-gray-900 wrap-break-word"
              style={{ letterSpacing: "-0.02em" }}
            >
              From{" "}
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className=" bg-black "
              >
                Simple Apps To
              </span>
              <br />
              Enterprise-Scale UX
            </h1>
          </div>

          {/* Right tagline */}
          <div className="max-w-xs md:pt-3">
            <p className="text-gray-500 text-lg leading-relaxed font-satoshiRegular ">
              We don&apos;t just create screens — we design experiences
              optimized for conversion and retention.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch">
          {/* Left — Dark card with dashboard */}
          <div
            className="relative rounded-3xl overflow-hidden bg-black w-full lg:flex-[0_0_65%]"
            style={{
              minHeight: 420,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
            {/* Glow orb */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none bg-linear-to-br from-sec via-transparent to-transparent "
            />

            {/* Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
              <div className="w-1 h-5 rounded-full bg-lime" />
              <span className="text-lime text-xs font-bold tracking-widest uppercase">
                Deep UX
              </span>
            </div>

            {/* Headline + CTA */}
            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-white text-2xl font-CabinetLight leading-snug mb-5 max-w-[220px]">
                Multi-Tenant B2B, Workflow-Heavy, Data-Dense Products
              </h2>
              <button
                className="group flex items-center gap-3 bg-black hover:bg-sec/50 hover:text-white transition-all duration-300 text-white text-xs font-satoshiRegular tracking-wider uppercase px-5 py-3 rounded-full"
                style={{ letterSpacing: "0.1em" }}
              >
                Contact Us
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-sec transition-colors">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5h6M5 2l3 3-3 3"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Dashboard mockup */}
            <div
              className="absolute right-0 top-8 w-[65%] h-[80%]"
              style={{ perspective: "800px" }}
            >
              <div
                style={{
                  transform: "rotateY(-8deg) rotateX(4deg)",
                  transformOrigin: "right center",
                }}
                className="w-full h-full"
              >
                <MockDashboard />
              </div>
            </div>
          </div>

          {/* Right — Wireframe panel */}
          <div
            className="relative rounded-3xl overflow-hidden bg-black w-full lg:flex-1"
            style={{
              minHeight: 420,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
            }}
          >
            {/* Pink accent glow */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)",
              }}
            />
            <div className="p-5 w-full h-full">
              <WireframePanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
