import StudentHero from "/public/image/student -hero.png"

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">

        <div className='bg-[#0F3158] p-6 sm:p-10 md:p-20 space-y-3'>
          <h5 className='text-[#F3F6FA] text-xs sm:text-sm'>Wlcome to BrightFuture Secondary School</h5>
          <h1 className='text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-11 font-[Poppins] text-[#F3F6FA]'>
            Empowering Students <br className="hidden sm:block" /> to <span className='text-[#F9B82E]'>Learn, Lead & Succeed</span>
          </h1>
          {/* <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid obcaecati et illo esse, cumque voluptatum, in reprehenderit sequi consequuntur sunt, vitae asperiores commodi rem fugit consequatur incidunt hic quae autem.</p> */}
          <div className='flex flex-wrap items-center gap-3 sm:gap-4 mt-8 md:mt-16'>
            <button className='p-2 text-sm w-24 sm:w-28 rounded-full bg-[#F9B82E] text-[#0F3158]'>Apply Now</button>
            <button className='p-2 text-sm w-40 sm:w-45 rounded-full text-[#F3F6FA] border border-[#5e6b79] shadow-blue-900'>Explore Our School</button>
          </div>
        </div>

        <div className="h-64 md:h-auto">
          <img src={StudentHero} alt="StudentHero" className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  )
}