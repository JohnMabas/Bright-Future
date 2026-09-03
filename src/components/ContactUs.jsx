import NavBar from "./NavBar";
import Footer from "./Footer";

export default function ContactUs() {
  return (
    <div>
      <div>
        <NavBar />

        <section className="w-full bg-[#f8fbff] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center sm:mb-10 lg:text-left">
              <p className="text-sm font-bold text-[#f4bd35]">Get In Touch</p>

              <h2 className="mt-1 text-2xl font-extrabold text-[#12477f] sm:text-3xl md:text-4xl">
                Contact Us
              </h2>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#6c84a0] lg:mx-0 sm:text-base">
                We would love to hear from you. Get in touch with us for
                enquiries, admissions, or any other information.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col rounded-2xl bg-[#063b70] p-6 shadow-lg sm:p-8 md:p-10">
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                  We'd Love to Hear From You
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100 sm:text-base">
                  Whether you have a question about admissions, our programmes,
                  or school activities, our team is ready to help.
                </p>

                <div className="mt-7 flex items-start gap-4 sm:mt-8">
                  <div className="">
                    <svg
                      className="text-3xl text-white font-bold"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <path d="M0 0h48v48H0z" fill="none" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M24 4.5A14.82 14.82 0 0 0 9.18 19.32h0v1.08c.6 8.12 7.34 14.65 14.82 23.1c7.81-8.82 14.82-15.5 14.82-24.18h0A14.82 14.82 0 0 0 24 4.5m0 7.7a7.13 7.13 0 1 1-7.13 7.12A7.13 7.13 0 0 1 24 12.2"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white sm:text-base">
                      Our Address
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                      brightfuture,
                      <br />
                      Jos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4 sm:mt-6">
                  <div className="">
                    <svg
                      className="text-3xl text-white font-bold"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.554 6.24L7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.2 29.2 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.46.46 0 0 1-.553.088a14.56 14.56 0 0 1-5.36-5.367a.46.46 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white sm:text-base">
                      Phone
                    </h4>

                    <a
                      href="tel:+2348000000000"
                      className="mt-1 block text-xs text-blue-100 hover:text-white sm:text-sm"
                    >
                      +234 9060096590
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4 sm:mt-6">
                  <div className="">
                    <svg
                      className="text-3xl text-white font-bold"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M0 0h1024v1024H0z" fill="none" />
                      <path
                        fill="currentColor"
                        d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-40 110.8V792H136V270.8l-27.6-21.5l39.3-50.5l42.8 33.3h643.1l42.8-33.3l39.3 50.5zM833.6 232L512 482L190.4 232l-42.8-33.3l-39.3 50.5l27.6 21.5l341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5l-39.3-50.5z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white sm:text-base">
                      Email
                    </h4>

                    <a
                      href="mailto:info@school.edu"
                      className="mt-1 block break-all text-xs text-blue-100 hover:text-white sm:text-sm"
                    >
                      brightfuture@edu.ng
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4 sm:mt-6">
                  <div className="">
                    <svg
                      className="text-3xl text-white font-bold"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        fill="currentColor"
                        d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10s10-4.486 10-10s-4.486-10-10-10M18 13h-6.75V6h2v5H18z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white sm:text-base">
                      Office Hours
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-blue-100 sm:text-sm">
                      Monday – Friday
                      <br />
                      8:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="mt-7 sm:mt-8">
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffc32d] px-6 py-3 text-sm font-extrabold text-[#174785] transition duration-300 hover:bg-[#ffd45d] sm:w-auto"
                  >
                    Send Us a Message
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

              <div className="min-h-75 overflow-hidden rounded-2xl border border-[#dce8f3] bg-white shadow-lg sm:min-h-100 md:min-h-112.5 lg:min-h-125">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.083024070982!2d8.888168873852102!3d9.843394190254172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10537500588cff61%3A0x2189f6392a1acaa1!2sBLOCKFUSE%20LABS!5e0!3m2!1sen!2sng!4v1788477331145!5m2!1sen!2sng"
                  title="Blockfuse Labs Location"
                  className="h-75 w-full border-0 sm:h-100 md:h-112.5 lg:h-full lg:min-h-125"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer/>
    </div>
  );
}
