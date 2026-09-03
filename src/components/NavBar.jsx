
import { FaSearch } from "react-icons/fa"
import Logo from "/public/image/Bright-log0.png"
import { Routes, Route, Link } from "react-router";

export default function NavBar() {
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

            <ul className="flex justify-center items-center gap-10 text-[#0F3158]">
                <Link to="/"><li>Home</li></Link>
               <Link to="/about"><li >About</li></Link>   
                <li>Admissions</li>
                <li>School Life</li>
                <li>News & Events</li>
                <li>Contact</li>
                
            </ul>
            <div className="flex items-center gap-4">
                <FaSearch className="text-[#0F3158]"/>
                <button className=" rounded-full bg-[#1769E8] text-white w-28 p-2 m-1 ">Apply Now</button>
            </div>
        </nav>
        
      
    </div>
  )
}
