import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Stats() {
  return (
    <div>
        <div className=" flex p-10 justify-between items-center w-full ">

      <div className="flex items-center gap-2">
        <img
          src="https://imgs.search.brave.com/a9X1CQ9Zgrk9ve3dszRDLfOMjVxBiobR5sFKzs-VV8M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z3JhZHdlYXIuY29t/L2Nkbi9zaG9wL2Zp/bGVzL01BVFRFTkIy/MDI2X2FiZDg3OWI3/LWEwMmMtNGQ3NC05/NWYwLTM5YzcxNzQ0/OWRjZS5qcGc_dj0x/NzYyOTkwMzAzJndp/ZHRoPTM4NDA"
          alt=""
        className="w-16"/>
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
