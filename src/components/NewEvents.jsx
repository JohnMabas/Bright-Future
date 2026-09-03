import NavBar from "./NavBar";
import Footer from "./Footer";
import ScienceFair from "/public/image/Sciencefair.png";
import HouseSports from "/public/image/Inter-house.png";
import ICTevent from "/public/image/ICTevent.png";

export default function NewEvents() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6">
         
          <div className="mb-4">
            <p className="text-xs font-bold text-[#f2b72b] sm:text-sm">
              News & Events
            </p>

            <h3 className="text-xl font-extrabold text-[#12477f] sm:text-2xl">
              Latest Updates
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="overflow-hidden rounded-md border border-[#dce8f3] bg-white shadow-[0_2px_8px_rgba(18,71,127,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-44 overflow-hidden sm:h-40">
                <img
                  src={ScienceFair}
                  alt="Science Fair 2026"
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <p className="text-[10px] font-medium text-[#8b9db3]">
                  Sep 3, 2026
                </p>

                <h4 className="mt-1 text-sm font-extrabold text-[#174785]">
                  Science Fair 2026
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#6c84a0]">
                  Our students showcased amazing innovations and creativity.
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0879e8] transition hover:text-[#045bb3]"
                >
                  Read More
                  <span className="text-sm">
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
            </article>

            <article className="overflow-hidden rounded-md border border-[#dce8f3] bg-white shadow-[0_2px_8px_rgba(18,71,127,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-44 overflow-hidden sm:h-40">
                <img
                  src={HouseSports}
                  alt="Inter-House Sports Day"
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <p className="text-[10px] font-medium text-[#8b9db3]">
                  Sep 1, 2026
                </p>

                <h4 className="mt-1 text-sm font-extrabold text-[#174785]">
                  Inter-House Sports Day
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#6c84a0]">
                  Team spirit, talent and excitement on the field.
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0879e8] transition hover:text-[#045bb3]"
                >
                  Read More
                  <span className="text-sm">
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
            </article>

            <article className="overflow-hidden rounded-md border border-[#dce8f3] bg-white shadow-[0_2px_8px_rgba(18,71,127,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-44 overflow-hidden sm:h-40">
                <img
                  src={ICTevent}
                  alt="New ICT Lab Launched"
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <p className="text-[10px] font-medium text-[#8b9db3]">
                  Sep 2, 2026
                </p>

                <h4 className="mt-1 text-sm font-extrabold text-[#174785]">
                  New ICT Lab Launched
                </h4>

                <p className="mt-1 text-xs leading-5 text-[#6c84a0]">
                  Equipping our students with future-ready skills.
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0879e8] transition hover:text-[#045bb3]"
                >
                  Read More
                  <span className="text-sm">
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
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
