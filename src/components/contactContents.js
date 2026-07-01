"use client";
import Image from "next/image";
import { ArrowUpRight, Mail, Clock, MessageCircle, Phone } from "lucide-react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Container from "./container";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { push, ref } from "firebase/database";
import { Bounce, toast, ToastContainer } from "react-toastify";

const budgetOptions = ["$50 - $100", "$100 - $500", "$500 - $1K", "$1K - $5K"];

const avatars = [
  { name: "DN", bg: "from-[#f2f2f2] to-[#c9c9c9]" },
  { name: "AE", bg: "from-[#b5b5b5] to-[#6e6e6e]" },
  { name: "LS", bg: "from-[#3a3a3a] to-[#000000]" },
];

const infoRows = [
  {
    icon: Mail,
    label: "Email us",
    value: "contact@lazystudio.co",
    href: "mailto:contact@lazystudio.co",
  },
  {
    icon: Phone,
    label: "Whatsapp",
    value: "+8801748996699",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
  {
    icon: MessageCircle,
    label: "Prefer to chat?",
    value: "We reply on socials too",
    href: "mailto:contact@lazystudio.co",
  },
];

function FieldLabel({ children }) {
  return (
    <label className="mb-3 block pl-4 font-satoshiBold text-[12px] uppercase tracking-[0.14em] text-neutral-500">
      {children}
    </label>
  );
}

function SoftInput(props) {
  return (
    <input
      {...props}
      className="h-16 w-full rounded-full border-2 border-neutral-200 bg-white px-6 text-[15px] text-black outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-black"
    />
  );
}

export default function ContactContents() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    budget: budgetOptions[0],
  });
  const [isSubmitting, setIsSubmitting] = useState("Submit");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleBudgetSelect = (budget) => {
    setFormData((currentData) => ({ ...currentData, budget }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message, budget } = formData;

    if (!name || !email || !phone || !message || !budget) {
      toast.error(" please fill all the fields", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: {
          backgroundColor: "white",
          color: "red",
        },
      });
      return;
    }
    if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
      toast.error("please enter a valid email", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: {
          backgroundColor: "white",
          color: "red",
        },
      });
      return;
    }

    setIsSubmitting("Submitting...");

    try {
      await push(ref(db, "clients"), {
        name,
        email,
        phone,
        message,
        budget,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        budget: budgetOptions[0],
      });
      toast.success("Message sent! We'll follow up within 24 hrs.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setIsSubmitting("Submit");
    }
  };

  return (
    <section className="bg-white px-5 pb-24 pt-14">
      {/* ---------- HERO ---------- */}
      <div className="relative z-0 flex justify-center">
        <div className="relative inline-flex h-33 w-57.5 items-start justify-center rounded-t-[999px] border border-b-0 border-neutral-200 bg-white pt-7">
          <div className="flex items-center">
            {avatars.map((avatar, index) => (
              <div
                key={avatar.name}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-linear-to-br ${avatar.bg} font-satoshiBold text-[13px] text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)] ${index === 0 ? "" : "-ml-2"}`}
              >
                {avatar.name}
              </div>
            ))}
          </div>
          <div className="absolute -bottom-4 left-1/2 -z-10 h-8 w-8 -translate-x-1/2 rounded-full bg-white" />
        </div>
      </div>

      <div className="relative z-10 -mt-2 text-center">
        <div className="flex items-center justify-center gap-2 font-satoshiBold text-[23px] text-black sm:text-[26px]">
          <span>Need a reply fast?</span>
          <Image
            src="/images/fire.png"
            alt="Fire icon"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        </div>

        <h1 className="mt-3 font-excon text-[58px] leading-[0.95] tracking-[-0.04em] text-black sm:text-[90px] lg:text-[112px]">
          <span>Let&apos;s </span>
          <span
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="bg-linear-to-br from-neutral-400 via-neutral-600 to-black"
          >
            talk!
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-155 px-4 font-satoshiRegular text-[19px] leading-[1.6] text-neutral-600">
          Share your project requirements here or send us an email at{" "}
          <span className="font-satoshiBold text-black">
            contact@lazystudio.co
          </span>{" "}
          — we&apos;ll follow up in{" "}
          <strong className="text-black">24 hrs</strong>.
        </p>
      </div>

      {/* ---------- BODY: INFO PANEL + FORM ---------- */}
      <Container className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        {/* INFO PANEL */}
        <div className="relative flex flex-col overflow-hidden rounded-[40px] bg-black p-10 text-white">
          {/* subtle monochrome glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-white/5 blur-[100px]" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-satoshiBold text-[11px] uppercase tracking-[0.16em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Get in touch
            </span>

            <h2 className="mt-6 font-excon text-[40px] leading-[0.95] tracking-[-0.03em]">
              Let&apos;s build
              <br />
              something great.
            </h2>
            <p className="mt-5 max-w-sm font-satoshiRegular text-[16px] leading-[1.6] text-white/60">
              Tell us where you&apos;re headed and we&apos;ll map the fastest
              route there. No fluff, just momentum.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {infoRows.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-satoshiBold text-[11px] uppercase tracking-[0.12em] text-white/40">
                        {label}
                      </span>
                      <span className="font-satoshiBold text-[16px]">
                        {value}
                      </span>
                    </span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="group flex cursor-none items-center gap-4"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="group flex items-center gap-4">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* panel footer */}
          <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
            <div className="flex items-center">
              {avatars.map((avatar, index) => (
                <div
                  key={`panel-${avatar.name}`}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-linear-to-br ${avatar.bg} font-satoshiBold text-[12px] text-white ${index === 0 ? "" : "-ml-2"}`}
                >
                  {avatar.name}
                </div>
              ))}
              <span className="ml-4 flex items-center gap-1 font-satoshiRegular text-[14px] italic text-white/60">
                Booked fast
                <Image
                  src="/images/fire.png"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
              </span>
            </div>

            <div className="flex items-center gap-4 text-[22px] text-white/80">
              <FaInstagram className="cursor-none transition-all duration-300 hover:-translate-y-1 hover:text-white" />
              <FaSquareXTwitter className="cursor-none transition-all duration-300 hover:-translate-y-1 hover:text-white" />
              <FaFacebookSquare className="cursor-none transition-all duration-300 hover:-translate-y-1 hover:text-white" />
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="rounded-[40px] border-2 border-neutral-200 bg-white p-8 transition-colors duration-300 ease-in hover:border-black sm:p-12">
          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <FieldLabel>Name &amp; Company</FieldLabel>
            <SoftInput
              name="name"
              onChange={handleChange}
              value={formData.name}
              type="text"
              placeholder="Don from Earth, Inc."
            />

            {/* EMAIL + PHONE */}
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div>
                <FieldLabel>Email</FieldLabel>
                <SoftInput
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="don@norman.me"
                />
              </div>

              <div>
                <FieldLabel>Phone</FieldLabel>
                <SoftInput
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  type="tel"
                  placeholder="(555) 555-555"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-7">
              <FieldLabel>Project Description</FieldLabel>
              <textarea
                name="message"
                rows={5}
                onChange={handleChange}
                value={formData.message}
                className="w-full rounded-[28px] border-2 border-neutral-200 px-6 py-5 text-[15px] text-black outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-black"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* BUDGET */}
            <div className="mt-7">
              <FieldLabel>Budget</FieldLabel>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleBudgetSelect(option)}
                    type="button"
                    className={`cursor-none rounded-full border-2 py-4 text-[13px] font-satoshiBold transition-all duration-300 ${
                      formData.budget === option
                        ? "border-transparent bg-black text-white"
                        : "border-neutral-200 text-neutral-600 hover:border-black"
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
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-black px-8 py-5 font-satoshiBold text-[17px] text-white shadow-[10px_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[10px_10px_40px_rgba(0,0,0,0.55)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-12"
              >
                {isSubmitting}
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </form>
        </div>
      </Container>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </section>
  );
}
