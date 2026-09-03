import { FaBullseye, FaStar } from "react-icons/fa";
import SchoolImage from "/public/image/Schoolbuilding.png";

export default function AboutHero() {
  return (
    <div>
      <div className="px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <img
              src={SchoolImage}
              alt=" School building"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          <div>
            <h5 className="text-[#F9B82E] text-sm font-semibold">About Us</h5>
            <h2 className="text-[#0F3158] text-2xl sm:text-3xl md:text-4xl font-[Poppins] font-bold mt-2">
              A Legacy of Excellence
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base mt-4 leading-relaxed">
              BrightFuture Secondary School was founded with a simple mission — to
              provide quality education that prepares students for a rapidly
              changing world. We focus on academic excellence, character
              development and leadership skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full p-2 bg-[#FEF3E2] shrink-0">
                  <FaBullseye className="text-[#F9B82E] w-4 h-4" />
                </div>
                <div>
                  <b className="text-[#0F3158] text-sm block">Our Mission</b>
                  <p className="text-[#4B5563] text-xs sm:text-sm">
                    To nurture, educate and empower every student.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full p-2 bg-[#FEF3E2] shrink-0">
                  <FaStar className="text-[#F9B82E] w-4 h-4" />
                </div>
                <div>
                  <b className="text-[#0F3158] text-sm block">Our Vision</b>
                  <p className="text-[#4B5563] text-xs sm:text-sm">
                    To be a leading school in academic excellence and character
                    formation.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 px-6 py-3 rounded-full bg-[#0F3158] text-white text-sm font-medium flex items-center gap-2 hover:bg-[#38290a] transition-colors">
              Learn More
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 0h16v16H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M7.293 1.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L11.586 9H2a1 1 0 0 1 0-2h9.586L7.293 2.707a1 1 0 0 1 0-1.414"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
