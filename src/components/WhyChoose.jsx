import { FaPeopleGroup } from "react-icons/fa6";
import StudentHero from "/public/image/student -hero.png"



export default function WhyChoose() {
  return (
    <div>
      <div className="p-10">
        <h2 className="text-[#0F3158] text-3xl font-[Poppins]">Why Choose BrightFuture</h2>
        <p className="text-[#0F3158] text-sm">Hightlighting what makes the school unique</p>
        <div className="flex gap-5">
            <div className="flex items-center gap-2">

            <div className="space-y-17">
                <div className="flex gap-3 items-center">
                    <div className="rounded-full p-3 w-10  bg-[#0F3158]">
                        <FaPeopleGroup className="w-4"/>
                    </div>
                    <span>
                        <b className="text-[#0F3158]">Expericened Teachers</b>
                        <p className="text-[#0F3158] text-sm">Passionate and qualified educators</p>
                    </span>
                </div>

                 <div className="flex gap-3 items-center">
                    <div className="rounded-full p-3 w-10  bg-[#0F3158]">
                        <FaPeopleGroup className="w-4"/>
                    </div>
                    <span>
                        <b className="text-[#0F3158]">Modern Facilies</b>
                        <p className="text-[#0F3158] text-sm">State-of-the-art learning spaces</p>
                    </span>
                </div>

                 
            </div>


            <div>
                <div className="space-y-17">
                <div className="flex gap-3 items-center">
                    <div className="rounded-full p-3 w-10  bg-[#0F3158]">
                        <FaPeopleGroup className="w-4"/>
                    </div>
                    <span>
                        <b className="text-[#0F3158]">Safe Enviroment</b>
                        <p className="text-[#0F3158] text-sm">A secure and caring campus</p>
                    </span>
                </div>

                 <div className="flex gap-3 items-center">
                    <div className="rounded-full p-3 w-10  bg-[#0F3158]">
                        <FaPeopleGroup className="w-4"/>
                    </div>
                    <span>
                        <b className="text-[#0F3158]">Technology-Driven Learing</b>
                        <p className="text-[#0F3158] text-sm">State-of-the-art learning spaces</p>
                    </span>
                </div>

                 

            </div>
            </div>

            </div>

            <div>
                <img src={StudentHero} alt="" className="w-125" />
            </div>
        </div>
      </div>
    </div>
  )
}
