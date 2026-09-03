import Library from "/public/image/Library.png";
import ScienceLab from "/public/image/Science lab.png";
import ICTlab from "/public/image/ICT lab.png";
import SportsComplex from "/public/image/Sports complex.png";

export default function Facilities() {
  return (
    <div>
      <div className="m-6 sm:m-10">
        <h5 className="text-[#F9B82E]">Our Facilities</h5>
        <h3 className="text-[#0F3158] text-2xl sm:text-3xl font-[Poppins]">
          Modern Facilities for Better Learning
        </h3>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-gray-100 w-full">
            <img src={Library} alt="" className="w-full rounded-lg" />
            <div className="p-4 leading-7">
              <span className="text-[#0F3158]">Library</span>
              <p className="text-[#0F3158]">Books-Researcy-Growth</p>
            </div>
          </div>

          <div className="bg-gray-100 w-full">
            <img src={ScienceLab} alt="" className="w-full rounded-lg" />
            <div className="p-4 leading-7">
              <span className="text-[#0F3158]">Science Lab</span>
              <p className="text-[#0F3158]">Explore-Experitment-Discover</p>
            </div>
          </div>

          <div className="bg-gray-100 w-full">
            <img src={ICTlab} alt="" className="w-full rounded-lg" />
            <div className="p-4 leading-7">
              <span className="text-[#0F3158]">ICT lab</span>
              <p className="text-[#0F3158]">Technology-Innovation-Skills</p>
            </div>
          </div>

          <div className="bg-gray-100 w-full">
            <img src={SportsComplex} alt="" className="w-full rounded-lg" />
            <div className="p-4 leading-7">
              <span className="text-[#0F3158]">Sports Complex</span>
              <p className="text-[#0F3158]">Fitness-TearmWork-Fun</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}