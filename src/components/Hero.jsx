import StudentHero from "/public/image/student -hero.png"

export default function Hero() {
  return (
    <div>
        <div className="grid grid-cols-2 h-full">
 
      <div className='bg-[#0F3158] p-10 space-y-3'>
        <h5 className='text-[#F3F6FA] text-sm'>Wlcome to BrightFuture Secondary School</h5>
        <h1 className='text-5xl leading-11 font-[Poppins] text-[#F3F6FA]'>Empowering Students <br /> to <span className='text-[#F9B82E]'>Learn, Lead & Succeed</span></h1>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid obcaecati et illo esse, cumque voluptatum, in reprehenderit sequi consequuntur sunt, vitae asperiores commodi rem fugit consequatur incidunt hic quae autem.</p>
        <div className='flex items-center gap-4 mt-16'>
            <button className='p-2 text-sm w-28 rounded-full bg-[#F9B82E] text-[#0F3158]'>Apply Now</button>
            <button className='p-2 text-sm w-45 rounded-full text-[#F3F6FA] border border-[#5e6b79] shadow-blue-900'>Explore Our School</button>
        </div>
      </div>
      <div>
        <img src={StudentHero} alt="StudentHero" />
      </div>
      </div>
    </div>
  )
}
