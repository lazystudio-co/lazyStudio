"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "./container";

const budgetOptions = ["$50 - $100", "$100 - $500", "$500 - $1K", "$1K - $5K"];

const avatars = [
  { name: "DN", bg: "from-[#d9d5cf] to-[#f8f7f3]" },
  { name: "AE", bg: "from-[#e7c5b9] to-[#f8eee8]" },
  { name: "LS", bg: "from-[#19163a] to-[#3557ff]" },
];

function FieldLabel({ children }) {
  return (
    <label className="mb-3 block pl-4 font-satoshiBold text-[13px] text-[#3a3764]">
      {children}
    </label>
  );
}

function SoftInput(props) {
  return (
    <input
      {...props}
      className="h-16 w-full rounded-full border-2 border-[#ebeaf6] bg-white px-6 text-[15px] text-[#3f4373] outline-none focus:border-blue-800/50"
    />
  );
}

export default function ContactContents() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    budget: budgetOptions[0],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        budget: budgetOptions[0],
      });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <section className="bg-white px-5 pb-24 pt-14">
      <div className="relative z-0 flex justify-center">
        <div className="relative inline-flex h-33 w-57.5 items-start justify-center rounded-t-[999px] border border-b-0 border-[#e9e8f2] bg-white pt-7">
          <div className="flex items-center">
            {avatars.map((avatar, index) => (
              <div
                key={avatar.name}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-linear-to-br ${avatar.bg} font-satoshiBold text-[13px] text-[#ffffff] shadow-[0_8px_18px_rgba(36,32,66,0.16)] ${index === 0 ? "" : "-ml-2"}`}
              >
                {avatar.name}
              </div>
            ))}
          </div>
          <div className="absolute -bottom-4 left-1/2 -z-10 h-8 w-8 -translate-x-1/2 rounded-full bg-white" />
        </div>
      </div>

      <div className="relative z-10 -mt-2 text-center">
        <div className="flex items-center justify-center gap-2 font-satoshiBold text-[23px] text-[#1e1a46] sm:text-[26px]">
          <span>Need a reply fast?</span>
          <Image
            src="/images/fire.png"
            alt="Fire icon"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        </div>

        <h1 className="mt-3 font-excon text-[58px] leading-[0.95] tracking-[-0.04em] text-[#000000] sm:text-[90px] lg:text-[112px]">
          <span>Let&apos;s </span>
          <span
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 "
          >
            talk!
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-155 px-4 font-satoshiRegular text-[19px] leading-[1.6] text-[#19163a]">
          Share your project requirements here or send us an email at
          contact@lazystudio.co we will follow up in <strong>24 hrs</strong>
        </p>
      </div>
      <Container className=" max-w-200! ">
        <form className="mt-14" onSubmit={handleSubmit}>
          {/* NAME */}
          <FieldLabel>Name & Company</FieldLabel>
          <SoftInput
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Don from Earth, Inc."
          />

          {/* EMAIL + PHONE */}
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <div>
              <FieldLabel>Email</FieldLabel>
              <SoftInput
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="don@norman.me"
              />
            </div>

            <div>
              <FieldLabel>Phone</FieldLabel>
              <SoftInput
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                type="tel"
                placeholder="(555) 555-555"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="mt-7">
            <FieldLabel>Project Description</FieldLabel>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-[28px] border border-black/10 px-6 py-5 focus:outline-blue-800/50 "
              placeholder="Tell us about your project..."
            />
          </div>

          {/* BUDGET */}
          <div className="mt-7">
            <FieldLabel>Budget</FieldLabel>
            <div className="grid grid-cols-4 rounded-full border border-black/10 overflow-hidden">
              {budgetOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setForm({ ...form, budget: option })}
                  className={`py-5 text-sm ${
                    form.budget === option
                      ? "bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
                      : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* SUBMIT */}
          <div className="mt-10">
            <button
              type="submit"
              className="flex items-center gap-4 rounded-full bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 px-8 py-4 text-white"
            >
              CONTINUE <ArrowUpRight />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
