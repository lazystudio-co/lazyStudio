import http from "k6/http";
import { check, sleep } from "k6";

// Examples (PowerShell):
//   k6 run tests/test.js
//   k6 run -e BASE_URL=https://lazystudio.co -e VUS=10 -e DURATION=30s tests/test.js

const baseUrl = (__ENV.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const vus = Number(__ENV.VUS || 5);
const duration = __ENV.DURATION || "15s";

export const options = {
  vus,
  duration,
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<2000"],
  },
};

export default function () {
  const response = http.get(`${baseUrl}/`, {
    tags: { name: "landing-page" },
  });

  check(response, {
    "landing page returns 200": (res) => res.status === 200,
    "landing page returns HTML": (res) =>
      (res.headers["Content-Type"] || "").includes("text/html"),
  });

  sleep(1);
}
