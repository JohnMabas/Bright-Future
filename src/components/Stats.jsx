import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Stats() {
  return (
    <div>
        <div className=" flex p-10 justify-between items-center w-full ">

      <div className="flex items-center gap-2">
      <svg className="" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 2304 1536">
	<path d="M0 0h2304v1536H0z" fill="none" />
	<path fill="currentColor" d="m1774 708l18 316q4 69-82 128t-235 93.5t-323 34.5t-323-34.5t-235-93.5t-82-128l18-316l574 181q22 7 48 7t48-7zm530-324q0 23-22 31L1162 767q-4 1-10 1t-10-1L490 561q-43 34-71 111.5T385 851q63 36 63 109q0 69-58 107l58 433q2 14-8 25q-9 11-24 11H224q-15 0-24-11q-10-11-8-25l58-433q-58-38-58-107q0-73 65-111q11-207 98-330L22 415q-22-8-22-31t22-31L1142 1q4-1 10-1t10 1l1120 352q22 8 22 31" />
</svg>

        <span>
            <b className="text-[#F9B82E] text-2xl">1,200+</b>
            <p className="text-[#0F3158]">Students</p>
        </span>
      </div>

       <div className="flex items-center gap-2">
        <img
          src="https://imgs.search.brave.com/a9X1CQ9Zgrk9ve3dszRDLfOMjVxBiobR5sFKzs-VV8M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z3JhZHdlYXIuY29t/L2Nkbi9zaG9wL2Zp/bGVzL01BVFRFTkIy/MDI2X2FiZDg3OWI3/LWEwMmMtNGQ3NC05/NWYwLTM5YzcxNzQ0/OWRjZS5qcGc_dj0x/NzYyOTkwMzAzJndp/ZHRoPTM4NDA"
          alt=""
        className="w-16"/>
        {/* <FaPeopleGroup className="w-16"/> */}
        <span>
            <b className="text-[#F9B82E] text-2xl">50+</b>
            <p className="text-[#0F3158]">Teachers</p>
        </span>
      </div>

       <div className="flex items-center gap-2">
        <img
          src="https://imgs.search.brave.com/a9X1CQ9Zgrk9ve3dszRDLfOMjVxBiobR5sFKzs-VV8M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z3JhZHdlYXIuY29t/L2Nkbi9zaG9wL2Zp/bGVzL01BVFRFTkIy/MDI2X2FiZDg3OWI3/LWEwMmMtNGQ3NC05/NWYwLTM5YzcxNzQ0/OWRjZS5qcGc_dj0x/NzYyOTkwMzAzJndp/ZHRoPTM4NDA"
          alt=""
        className="w-16"/>
        <span>
            <b className="text-[#F9B82E] text-2xl">25+</b>
            <p className="text-[#0F3158]">Years of Excellence</p>
        </span>
      </div>
        </div>

    </div>
  );
}
