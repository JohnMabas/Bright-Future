import { FaPeopleGroup } from "react-icons/fa6";
import StudentHero from "/public/image/student -hero.png"

export default function WhyChoose() {
  return (
    <div>
      <div className="p-6 sm:p-10">
        <h2 className="text-[#0F3158] text-2xl sm:text-3xl font-[Poppins]">Why Choose BrightFuture</h2>
        <p className="text-[#0F3158] text-sm">Hightlighting what makes the school unique</p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 mt-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-5">

            <div className="space-y-8 sm:space-y-17">
              <div className="flex gap-3 items-center">
                <div className="rounded-full p-3 w-10 shrink-0 bg-[#0F3158]">
                  <FaPeopleGroup className="w-4 text-white" />
                </div>
                <span>
                  <b className="text-[#0F3158]">Expericened Teachers</b>
                  <p className="text-[#0F3158] text-sm">Passionate and qualified educators</p>
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="rounded-full p-3 w-10 shrink-0 bg-[#0F3158]">
                  <FaPeopleGroup className="w-4 text-white" />
                </div>
                <span>
                  <b className="text-[#0F3158]">Modern Facilies</b>
                  <p className="text-[#0F3158] text-sm">State-of-the-art learning spaces</p>
                </span>
              </div>
            </div>

            <div className="space-y-8 sm:space-y-17">
              <div className="flex gap-3 items-center">
                <div className="rounded-full p-3 w-10 shrink-0 bg-[#0F3158]">
                  <FaPeopleGroup className="w-4 text-white" />
                </div>
                <span>
                  <b className="text-[#0F3158]">Safe Enviroment</b>
                  <p className="text-[#0F3158] text-sm">A secure and caring campus</p>
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="rounded-full p-3 w-10 shrink-0 bg-[#0F3158]">
                  <FaPeopleGroup className="w-4 text-white" />
                </div>
                <span>
                  <b className="text-[#0F3158]">Technology-Driven Learing</b>
                  <p className="text-[#0F3158] text-sm">State-of-the-art learning spaces</p>
                </span>
              </div>
            </div>

          </div>

          <div className="w-full lg:w-125">
            <img src={StudentHero} alt="" className="w-full h-auto rounded-lg object-cover" />
          </div>

        </div>
      </div>
    </div>
  )
}