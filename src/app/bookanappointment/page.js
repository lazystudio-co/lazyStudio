"use client";

import { useMemo, useState } from "react";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const monthGrid = [
  { day: 8, monthOffset: 0 },
  { day: 9, monthOffset: 0 },
  { day: 10, monthOffset: 0 },
  { day: 11, monthOffset: 0 },
  { day: 12, monthOffset: 0 },
  { day: 13, monthOffset: 0 },
  { day: 14, monthOffset: 0 },
  { day: 15, monthOffset: 0 },
  { day: 16, monthOffset: 0 },
  { day: 17, monthOffset: 0 },
  { day: 18, monthOffset: 0 },
  { day: 19, monthOffset: 0 },
  { day: 20, monthOffset: 0 },
  { day: 21, monthOffset: 0 },
  { day: 22, monthOffset: 0 },
  { day: 23, monthOffset: 0 },
  { day: 24, monthOffset: 0 },
  { day: 25, monthOffset: 0 },
  { day: 26, monthOffset: 0 },
  { day: 27, monthOffset: 0 },
  { day: 28, monthOffset: 0 },
  { day: 29, monthOffset: 0 },
  { day: 30, monthOffset: 0 },
  { day: 31, monthOffset: 0 },
  { day: 1, monthOffset: 1 },
  { day: 2, monthOffset: 1 },
  { day: 3, monthOffset: 1 },
  { day: 4, monthOffset: 1 },
  { day: 5, monthOffset: 1 },
  { day: 6, monthOffset: 1 },
  { day: 7, monthOffset: 1 },
  { day: 8, monthOffset: 1 },
  { day: 9, monthOffset: 1 },
  { day: 10, monthOffset: 1 },
  { day: 11, monthOffset: 1 },
];

const timeSlots = [
  "2:30pm",
  "2:40pm",
  "3:00pm",
  "3:10pm",
  "3:20pm",
  "3:30pm",
  "3:40pm",
  "3:50pm",
  "4:00pm",
  "4:10pm",
];

const weekdayLong = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatReadableTime(time) {
  return time.replace("pm", " pm").replace("am", " am");
}

export default function Home() {
  const [selectedDay, setSelectedDay] = useState({ day: 16, monthOffset: 0 });
  const [selectedTime, setSelectedTime] = useState(null);

  const fullDate = useMemo(() => {
    const month = selectedDay.monthOffset === 0 ? 2 : 3;
    const date = new Date(2026, month, selectedDay.day);
    return `${weekdayLong[date.getDay()]}, ${monthLong[date.getMonth()]} ${selectedDay.day}, 2026`;
  }, [selectedDay]);

  const shortDayLabel = useMemo(() => {
    const month = selectedDay.monthOffset === 0 ? 2 : 3;
    const date = new Date(2026, month, selectedDay.day);
    return `${weekdayLong[date.getDay()].slice(0, 3)} ${selectedDay.day}`;
  }, [selectedDay]);

  const isDetailsStep = Boolean(selectedTime);

  return (
    <div className="min-h-screen px-4 mt-10 text-white ">
      <main className="mx-auto flex w-full  flex-col items-center">
        <div className="w-full max-w-350 py-6 rounded-xl border border-white/10 bg-[#121416]">
          {!isDetailsStep ? (
            <div className="grid grid-cols-2 select-none ">
              <section className=" p-6  col-span-2 w-200 mb-4  ">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-white to-sec" />
                  <p className="text-lg text-white/80">Lazy Studio</p>
                </div>
                <h1 className="text-[44px] font-semibold leading-none">
                  Let’s Build Something Great
                </h1>
                <p className="mt-4 text-[26px] leading-[1.25] text-white/85">
                  Schedule a call with our team to explore your project,
                  timeline, and vision. We’ll guide you through the best
                  approach to create a powerful digital experience.
                </p>
              </section>

              <section className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-[30px] font-semibold">March 2026</h2>
                  <div className="flex items-center gap-3 text-white/40">
                    <button className="text-2xl hover:text-white" type="button">
                      &#8249;
                    </button>
                    <button className="text-2xl hover:text-white" type="button">
                      &#8250;
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2 text-[14px] font-semibold text-white/90">
                  {weekDays.map((day) => (
                    <p key={day} className="py-2 text-center">
                      {day}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {monthGrid.map((cell) => {
                    const isSelected =
                      selectedDay.day === cell.day &&
                      selectedDay.monthOffset === cell.monthOffset;
                    const monthTag = cell.monthOffset === 1 && cell.day === 1;

                    return (
                      <button
                        key={`${cell.monthOffset}-${cell.day}`}
                        type="button"
                        onClick={() => setSelectedDay(cell)}
                        className={`relative rounded-lg border text-[22px] transition ${
                          isSelected
                            ? "border-white bg-[#f4f5f6] font-semibold text-black"
                            : "border-transparent bg-[#3b3f44] text-white hover:bg-[#4a4f56]"
                        }`}
                      >
                        {monthTag ? (
                          <span className="absolute left-2 top-1 text-[11px] font-semibold">
                            APR
                          </span>
                        ) : null}
                        <span>{cell.day}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className="p-6">
                <div className=" flex items-center justify-between mb-7.5 ">
                  <p className="text-[32px] font-semibold">{shortDayLabel}</p>
                </div>

                <div className="space-y-2 pb-1 grid grid-cols-2 gap-y-1 gap-x-2 ">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className=" rounded-xl border py-0.5 border-white/20 text-[20px] font-medium text-white/90 transition hover:border-white/50 hover:bg-white/5 "
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr]">
              <section className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-white to-sec" />
                  <p className="text-lg text-white/80">Lazy Studio</p>
                </div>
                <h1 className="text-[40px] font-semibold leading-none">
                  Let’s Build Something Great
                </h1>
                <p className="mt-4 text-[34px] leading-[1.25] text-white/85">
                  Schedule a call with our team to explore your project,
                  timeline, and vision. We’ll guide you through the best
                  approach to create a powerful digital experience.
                </p>
              </section>

              <section className="p-6">
                <form className="space-y-4 grid grid-cols-2 gap-2 gap-x-8 ">
                  <label className="block">
                    <p className="mb-2 block text-[14px] font-semibold">
                      Your name <span className=" text-red-700 ">*</span>
                    </p>
                    <input
                      placeholder="Your Name"
                      className="h-11 w-full rounded-xl border border-white/20 bg-[#121416] px-3 text-[15px] outline-none ring-0 placeholder:text-white/35 focus:border-white/45"
                      type="text"
                    />
                  </label>

                  <label className="block">
                    <p className="mb-2 block text-[14px] font-semibold">
                      Email address <span className=" text-red-700 ">*</span>
                    </p>
                    <input
                      placeholder="Your Email"
                      className="h-11 w-full rounded-xl border border-white/20 bg-[#121416] px-3 text-[15px] outline-none ring-0 placeholder:text-white/35 focus:border-white/45"
                      type="email"
                    />
                  </label>

                  <label className="block">
                    <p className="mb-2 block text-[14px] font-semibold">
                      Project Budget <span className=" text-red-700 ">*</span>
                    </p>
                    <input
                      placeholder="Your Project Budget"
                      className="h-11 w-full rounded-xl border border-white/20 bg-[#121416] px-3 text-[15px] outline-none ring-0 placeholder:text-white/35 focus:border-white/45"
                      type="email"
                    />
                  </label>
                  <label className="block">
                    <p className="mb-2 block text-[14px] font-semibold">
                      WhatsApp Number - optional
                    </p>
                    <input
                      placeholder="Your Email"
                      className="h-11 w-full rounded-xl border border-white/20 bg-[#121416] px-3 text-[15px] outline-none ring-0 placeholder:text-white/35 focus:border-white/45"
                      type="email"
                    />
                  </label>
                  <label className="block col-span-2 ">
                    <p className="mb-2 block text-[14px] font-semibold">
                      Project Brief <span className=" text-red-700 ">*</span>
                    </p>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-white/20 bg-[#121416] px-3 py-3 text-[15px] outline-none ring-0 placeholder:text-white/45 focus:border-white/45"
                      placeholder="Please share anything that will help prepare for our meeting."
                    />
                  </label>
                </form>
                <div className=" flex flex-col justify-center items-center ">
                  <div className=" flex justify-center items-center gap-2 mt-4 ">
                    <input
                      type="checkbox"
                      className=" select-none cursor-pointer accent-sec "
                    />
                    <p className="pt-1 text-[14px] leading-6 text-white/70 text-center  ">
                      I have read and agree to lazystudi.co’s
                      <span className="text-white"> Terms of Service</span> and
                      <span className="text-white"> Privacy Policy</span>.
                    </p>
                  </div>

                  <br />
                  <div className="flex items-center justify-end gap-6">
                    <button
                      type="button"
                      onClick={() => setSelectedTime(null)}
                      className="text-base text-white/80 transition hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="rounded-xl border border-white/30 bg-[#f4f5f6] px-4 py-2 text-base font-semibold text-black transition hover:bg-white"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
