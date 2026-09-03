import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"
import Logo from "/public/image/Bright-log0.png"
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

        <ul className="hidden md:flex justify-center items-center gap-10 text-[#0F3158]">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <li>Admissions</li>
          <li>School Life</li>
          <li>News & Events</li>
          <li>Contact</li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <FaSearch className="text-[#0F3158]" />
          <button className="rounded-full bg-[#1769E8] text-white w-28 p-2 m-1">
            Apply Now
          </button>
        </div>

        <button className="md:hidden text-2xl text-[#0F3158]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 text-[#0F3158] py-6">
          <Link to="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
          <Link to="/about" onClick={() => setIsOpen(false)}><li>About</li></Link>
          <li>Admissions</li>
          <li>School Life</li>
          <li>News & Events</li>
          <li>Contact</li>
          <div className="flex items-center gap-4">
            <FaSearch className="text-[#0F3158]" />
            <button className="rounded-full bg-[#1769E8] text-white w-28 p-2  hover:bg-[#1257c2] transition-colors">
              Apply Now
            </button>
          </div>
        </ul>
      )}
    </div>
  )
}