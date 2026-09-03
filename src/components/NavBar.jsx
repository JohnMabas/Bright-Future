import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Logo from "/public/image/Bright-log0.png";
import { Link } from "react-router";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-24" />
          <div>
            <b className="text-sm text-[#0F3158]">Brightfuture</b>
            <p className="text-[10px] text-[#0F3158]">Secondary school</p>
          </div>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-10  text-[#0F3158]">
          <Link to="/" className="hover:underline">
            <li>Home</li>
          </Link>
          <Link to="/about" className="hover:underline">
            <li>About</li>
          </Link>
          <Link to="/academic" className="hover:underline">
            <li>Admissions</li>
          </Link>
          <Link to="/newEvents" className="hover:underline">
            <li>News & Events</li>
          </Link>
         <Link to="/ContactUs"><li>Contact</li></Link> 
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <FaSearch className="text-[#0F3158]" />
          <button className="rounded-full bg-[#ffc32d] transition hover:bg-[#045bb3] hover:text-white text-[#0F3158] w-28 p-2 m-1">
            Apply Now
          </button>
        </div>

        <button
          className="md:hidden text-2xl text-[#0F3158]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 text-[#0F3158] py-6">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>
            <li>Home</li>
          </Link>
          <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>
            <li>About</li>
          </Link>
          <Link to="/academic" className="hover:underline" onClick={() => setIsOpen(false)}>
            <li>Admissions</li>
          </Link>
          <Link to="/newEvents" className="hover:underline" onClick={() => setIsOpen(false)}>
          <Link to="/ContactUs" className="hover:underline" onClick={() => setIsOpen(false)}><li>News & Events</li></Link>  
          </Link>

          <li>Contact</li>
          <div className="flex items-center gap-4">
            <FaSearch className="text-[#0F3158]" />
            <button className="rounded-full bg-[#0F3158] text-white w-28 p-2  hover:bg-[#362a10] transition-colors">
              Apply Now
            </button>
          </div>
        </ul>
      )}
    </div>
  );
}
