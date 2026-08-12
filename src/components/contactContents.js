"use client";
import Image from "next/image";
import { ArrowUpRight, Mail, Clock, MessageCircle, Phone, ChevronDown } from "lucide-react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Container from "./container";
import { useState, useEffect, useRef } from "react";
import { db } from "../../firebaseConfig";
import { push, ref } from "firebase/database";
import Link from "next/link";
import { animate, easeIn, easeInOut, easeOut, motion } from "framer-motion"

const usdOptions = ["$50 - $100", "$100 - $500", "$500 - $1K", "$1K - $5K"];
const bdtOptions = [
  "৳5,000 - ৳10,000",
  "৳10,000 - ৳50,000",
  "৳50,000 - ৳100,000",
  "৳100,000 - ৳500,000",
];

const serviceOptions = [
  "Web Development",
  "SaaS Web & Application Design",
  "Agentic Ai",
  "Web Design",
  "UX UI Design",
  "Graphic Design",
];

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
  const [options, setOptions] = useState(usdOptions);
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(0);
  const [submittedName, setSubmittedName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
    budget: usdOptions[0],
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState("Submit");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const detectRegion = async () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const isDhaka = timezone === "Asia/Dhaka";
        const isBDLocale =
          typeof navigator !== "undefined" &&
          (navigator.language === "bn-BD" ||
            navigator.language === "en-BD" ||
            (navigator.languages &&
              (navigator.languages.includes("bn-BD") ||
                navigator.languages.includes("en-BD"))));

        if (isDhaka || isBDLocale) {
          setOptions(bdtOptions);
          setFormData((prev) => ({
            ...prev,
            budget: bdtOptions[0],
          }));
          return;
        }
      } catch (e) {
        console.error("Timezone/locale detection error:", e);
      }

      try {
        const res = await fetch("https://freeipapi.com/api/json");
        if (res.ok) {
          const data = await res.json();
          if (data.countryCode === "BD") {
            setOptions(bdtOptions);
            setFormData((prev) => ({
              ...prev,
              budget: bdtOptions[0],
            }));
          }
        }
      } catch (err) {
        console.error("Location detection API error:", err);
      }
    };

    detectRegion();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];

      if (services.length > 0 && errors.services) {
        setErrors((prevErrors) => {
          const nextErrors = { ...prevErrors };
          delete nextErrors.services;
          return nextErrors;
        });
      }

      return { ...prev, services };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBudgetSelect = (index) => {
    setSelectedBudgetIndex(index);
    setFormData((currentData) => ({ ...currentData, budget: options[index] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, services, message, budget } = formData;

    const newErrors = {};
    if (!name) newErrors.name = "Please enter your name & company";
    if (!email) {
      newErrors.email = "Please enter your email address";
    } else if (!email.includes("@") || !email.endsWith(".com")) {
      newErrors.email = "Please enter a valid email (e.g. name@domain.com)";
    }
    if (!phone) newErrors.phone = "Please enter your phone number";
    if (!services || services.length === 0) {
      newErrors.services = "Please select at least one service";
    }
    if (!message) newErrors.message = "Please describe your project";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting("Submitting...");

    try {
      setSubmittedName(name);
      await push(ref(db, "clients"), {
        name,
        email,
        phone,
        services,
        message,
        budget,
      });
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
        message: "",
        budget: options[0],
      });

      setSelectedBudgetIndex(0);
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {

    }
  };

  const displayName = submittedName || formData.name || "[Name]";

  return (
    <>
      {submitted ? (
        <section
          style={{ paddingRight: "var(--scrollbar-width, 0px)" }}
          className=" w-full fixed inset-0 flex flex-col justify-center items-center min-h-screen bg-white z-50 overflow-y-auto py-16 px-6 select-none "
        >
          {/* Ambient color gradient accents */}
          <div className="absolute left-1/4 top-1/4 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full bg-neutral-100/50 blur-[60px] sm:blur-[80px] pointer-events-none" />
          <div className="absolute right-1/4 bottom-1/4 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full bg-neutral-200/40 blur-[70px] sm:blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl w-full text-center my-auto">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 40 }}
              transition={{ duration: 1, ease: easeIn }}
              viewport={{ once: true, type: "spring", siffness: 100 }} className="font-CabinetGrotesk text-[28px] sm:text-[44px] md:text-[64px] leading-[1.1] sm:leading-[1.05] tracking-[-0.04em] text-black">
              <span
                className=" from-black to-white mr-2 "  >
                Hey
              </span>
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="font-satoshiBold bg-linear-to-br from-neutral-500 via-neutral-800 to-black bg-clip-text text-transparent"
              >
                {displayName}
              </span>
              ,<br />
              thanks for reaching out!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ duration: 1, ease: easeOut }}
              viewport={{ once: true, type: "spring", siffness: 100 }} className="mt-4 font-satoshiRegular text-[16px] sm:text-[18px] md:text-[22px] leading-normal text-neutral-600 max-w-xl mx-auto px-4">
              We&apos;ve got your project details and will follow up within{" "}
              <strong className="text-black font-satoshiBold">24 hours</strong>.
            </motion.p>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto w-full px-4">
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                transition={{ duration: 0.3, ease: easeInOut }}
                viewport={{ once: true, type: "spring", siffness: 100 }}
                href="https://wa.me/8801748996699"
                className="cursor-none group inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4.5 font-satoshiBold text-[15px] text-white shadow-md transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg w-full sm:w-auto"
              >
                <span>WhatsApp Us</span>
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </motion.a><Link href="/" >
                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 100 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  viewport={{ once: true, type: "spring", siffness: 100 }}
                  className="cursor-none inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-200 bg-white px-8 py-4.5 font-satoshiBold text-[15px] text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white w-full sm:w-auto"
                >

                  Home

                </motion.button></Link>
            </div>
          </div>
        </section>
      ) : (

        <section className={` bg-white px-5 pb-24 pt-14 ${submitted ? "hidden" : "block"} `} >
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

            <h1 className="mt-3 font-CabinetGrotesk text-[58px] leading-[0.95] tracking-[-0.04em] text-black sm:text-[90px] lg:text-[112px]">
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

                <h2 className="mt-6 font-CabinetGrotesk text-[40px] leading-[0.95] tracking-[-0.03em]">
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
                {errors.name && (
                  <span className="text-red-500 text-[12px] mt-1.5 block ml-4 font-satoshiRegular">
                    {errors.name}
                  </span>
                )}

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
                    {errors.email && (
                      <span className="text-red-500 text-[12px] mt-1.5 block ml-4 font-satoshiRegular">
                        {errors.email}
                      </span>
                    )}
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
                    {errors.phone && (
                      <span className="text-red-500 text-[12px] mt-1.5 block ml-4 font-satoshiRegular">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* SERVICES (I NEED HELP WITH) */}
                <div className="mt-7 relative" ref={dropdownRef}>
                  <FieldLabel>
                    I need help with
                  </FieldLabel>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex h-16 w-full cursor-none items-center justify-between rounded-[20px] border-2 px-6 text-[15px] font-satoshiBold outline-none transition-all duration-300 ${isDropdownOpen
                      ? "border-neutral-200 bg-neutral-50/50"
                      : "border-neutral-200 bg-white hover:border-black"
                      }`}
                  >
                    <span className={`block truncate ${formData.services.length === 0 ? "text-neutral-400 font-satoshiRegular" : "text-black"}`}>
                      {formData.services.length > 0
                        ? formData.services.join(", ")
                        : "Select services"}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-black transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 z-50 mt-2 max-h-[240px] overflow-y-auto rounded-[20px] border-2 border-neutral-100 bg-white py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-neutral-400">
                      {serviceOptions.map((service) => {
                        const isChecked = formData.services.includes(service);
                        return (
                          <div
                            key={service}
                            onClick={() => handleServiceToggle(service)}
                            className="flex cursor-none items-center gap-3 px-6 py-4 transition-colors duration-200 hover:bg-neutral-50"
                          >
                            <div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border-2 transition-all duration-200 ${isChecked
                                ? "border-black bg-black text-white"
                                : "border-neutral-300 bg-white"
                                }`}
                            >
                              {isChecked && (
                                <svg
                                  className="h-3 w-3 fill-none stroke-current stroke-[3px]"
                                  viewBox="0 0 24 24"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </div>
                            <span className="font-satoshiBold text-[15px] text-neutral-800">
                              {service}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {errors.services && (
                    <span className="text-red-500 text-[12px] mt-1.5 block ml-4 font-satoshiRegular">
                      {errors.services}
                    </span>
                  )}
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
                  {errors.message && (
                    <span className="text-red-500 text-[12px] mt-1.5 block ml-4 font-satoshiRegular">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* BUDGET */}
                <div className="mt-7">
                  <FieldLabel>Budget</FieldLabel>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {options.map((option, index) => (
                      <button
                        key={option}
                        onClick={() => handleBudgetSelect(index)}
                        type="button"
                        className={`cursor-none rounded-full border-2 py-4 text-[13px] font-satoshiBold transition-all duration-300 ${selectedBudgetIndex === index
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

        </section>
      )}
    </>
  );
}
