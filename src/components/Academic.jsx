import CTA from "./CTA";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PrimaryStudent from "/public/image/Primaryschool.png";
import SecondaryStudent from "/public/image/Secondarystudents.png";
import STEMStudent from "/public/image/STEMstudent.png";

export default function Academic() {
  return (
    <div>
      <NavBar />
      <section className="bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mt-1 text-sm text-[#6f89a8] sm:text-base">
              Showcasing different learning levels and programmes.
            </p>
          </div>

          <div className="mb-7">
            <p className="mb-1 text-sm font-bold text-[#f4bd35] sm:text-base">
              Our Academics
            </p>

            <h3 className="text-2xl font-extrabold text-[#12477f] sm:text-3xl lg:text-4xl">
              World-Class Education for Every Stage
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border border-[#e3eaf2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={PrimaryStudent}
                  alt="Primary School"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex min-h-61.25 flex-col p-5">
                <h4 className="text-lg font-extrabold text-[#174785]">
                  Primary School
                </h4>

                <p className="mt-1 text-xs font-semibold text-[#8aa4c4]">
                  Ages 5 – 11
                </p>

                <p className="mt-6 text-sm leading-6 text-[#6683a6]">
                  A strong foundation for lifelong learning and success.
                </p>

                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#ffc32d]"
                >
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
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#e3eaf2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={SecondaryStudent}
                  alt="Secondary School"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex min-h-61.25 flex-col p-5">
                <h4 className="text-lg font-extrabold text-[#174785]">
                  Secondary School
                </h4>

                <p className="mt-1 text-xs font-semibold text-[#8aa4c4]">
                  Ages 12 – 16
                </p>

                <p className="mt-6 text-sm leading-6 text-[#6683a6]">
                  Building confidence, knowledge and leadership skills.
                </p>

                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#ffc32d]"
                >
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
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#e3eaf2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={STEMStudent}
                  alt="STEM Programmes"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex min-h-61.25 flex-col p-5">
                <h4 className="text-lg font-extrabold text-[#174785]">
                  STEM Programmes
                </h4>

                <p className="mt-1 text-xs font-semibold text-[#8aa4c4]">
                  Science · Technology · Engineering · Math
                </p>

                <p className="mt-6 text-sm leading-6 text-[#6683a6]">
                  Hands-on learning for a brighter future.
                </p>

                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#ffc32d]"
                >
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA/>

      <Footer/>
    </div>
  );
}
