"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "./container";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { push, ref } from "firebase/database";
import { Bounce, toast, ToastContainer } from "react-toastify";

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
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setIsSubmitting("Submit");
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
                  onClick={() => handleBudgetSelect(option)}
                  type="button"
                  className={`py-5 text-sm ${
                    formData.budget === option
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
              className="flex items-center gap-4 rounded-full bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 px-8 py-4 text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting} <ArrowUpRight />
            </button>
          </div>
        </form>
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
