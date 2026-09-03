import CTABoy from "/public/image/CTA.png";

export default function CTA() {
  return (
    <div>
      <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-md bg-[#063b70] shadow-sm">
          <div className="grid min-h-47.5 grid-cols-1 md:grid-cols-2">
            <div className="relative flex flex-col justify-center overflow-hidden px-6 py-8 sm:px-8 md:px-10 lg:px-12">
              
              <div className="relative max-w-md">
                <h2 className="text-2xl font-extrabold  text-white sm:text-3xl">
                  Ready to Begin
                  <br />
                  Your Journey?
                </h2>

                <p className="mt-2 text-sm font-semibold leading-5 text-white sm:text-base">
                  Give your child the best environment
                  <br className="hidden sm:block" />
                  to learn, grow and thrive.
                </p>

                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#ffc32d] px-5 py-2.5 text-xs font-extrabold text-[#174785] shadow-sm transition-all duration-300 hover:bg-[#ffd45d] hover:shadow-md"
                >
                  Apply Now
                  <span className="text-base leading-none">
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

            <div className="relative min-h-55 overflow-hidden md:min-h-47.5">
              <img
                src={CTABoy}
                alt="Student walking through the school campus"
                className="h-100 w-full object-cover "
              />

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
