import React, { useState, useEffect } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <b className="text-[#F9B82E] text-xl sm:text-2xl">
      {count}+
    </b>
  );
}

export default function Stats() {
  return (
    <div>
      <div className="flex flex-col-2 sm:flex-row flex-wrap gap-6 sm:gap-4 p-6 sm:p-10 justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <span className="text-[#0F3158] text-2xl sm:text-3xl md:text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1em"
              viewBox="0 0 2304 1536"
            >
              <path d="M0 0h2304v1536H0z" fill="none" />
              <path
                fill="currentColor"
                d="m1774 708l18 316q4 69-82 128t-235 93.5t-323 34.5t-323-34.5t-235-93.5t-82-128l18-316l574 181q22 7 48 7t48-7zm530-324q0 23-22 31L1162 767q-4 1-10 1t-10-1L490 561q-43 34-71 111.5T385 851q63 36 63 109q0 69-58 107l58 433q2 14-8 25q-9 11-24 11H224q-15 0-24-11q-10-11-8-25l58-433q-58-38-58-107q0-73 65-111q11-207 98-330L22 415q-22-8-22-31t22-31L1142 1q4-1 10-1t10 1l1120 352q22 8 22 31"
              />
            </svg>
          </span>
          <span>
            <Counter target={100} />
            <p className="text-[#0F3158] text-sm sm:text-base">Students</p>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#0F3158] text-2xl sm:text-3xl md:text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25em"
              height="1em"
              viewBox="0 0 640 512"
            >
              <path d="M0 0h640v512H0z" fill="none" />
              <path
                fill="currentColor"
                d="M72 88a56 56 0 1 1 112 0a56 56 0 1 1-112 0m-8 157.7c-10 11.2-16 26.1-16 42.3s6 31.1 16 42.3v-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416v-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32m8-328a56 56 0 1 1 112 0a56 56 0 1 1-112 0m120 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-80 272c0 16.2 6 31 16 42.3v-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zm64 42.3c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112"
              />
            </svg>
          </span>
          <span>
            <Counter target={50} />
            <p className="text-[#0F3158] text-sm sm:text-base">Teachers</p>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#0F3158] text-2xl sm:text-3xl md:text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path d="M0 0h16v16H0z" fill="none" />
              <path
                fill="currentColor"
                d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"
              />
            </svg>
          </span>
          <span>
            <Counter target={25} />
            <p className="text-[#0F3158] text-sm sm:text-base">Years of Excellence</p>
          </span>
        </div>
      </div>
    </div>
  );
}