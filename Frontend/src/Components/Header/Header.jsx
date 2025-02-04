import React, { useState } from "react";
import Logo from "../../assets/1.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="m-2 p-4 flex items-center justify-between bg-slate-900 shadow-md rounded-md">
      {/* Left Side: Logo & Title */}
      <div className="flex items-center gap-3">
        <img src={Logo} className="h-12 w-12" alt="Logo" />
        <h1 className="font-bold text-white text-3xl md:text-4xl brightness-100 shadow-sm shadow-white">
          Dream Home
        </h1>
      </div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex gap-5 text-white text-lg">
        <li className="p-2 border-amber-400 border-[1px] rounded-md hover:bg-amber-400">Home</li>
        <li className="p-2 border-amber-400 border-[1px] rounded-md hover:bg-amber-400">About</li>
        <li className="p-2 border-amber-400 border-[1px] rounded-md hover:bg-amber-400">Become A Host</li>
      </ul>

      {/* Right Side: Login & Sign Up */}
      <div className="hidden md:flex gap-3">
        <button className="px-3 py-1 border-amber-400 border-[1px] text-white rounded-md hover:bg-amber-400">Login</button>
        <button className="px-3 py-1 border-amber-400 border-[1px] text-white rounded-md hover:bg-amber-400">Sign Up</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isNavOpen && (
        <div className="absolute top-16 right-4 bg-slate-800 p-3 rounded-md shadow-lg md:hidden">
          <ul className="flex flex-col gap-3 text-white text-lg">
            <li className="p-2 border-amber-400 border-[1px] rounded-md hover:bg-amber-400">Home</li>
            <li className="p-2 border-amber-400 border-[1px] rounded-md hover:bg-amber-400">About</li>
            <li className="p-2 border-amber-400 border-[1px] rounded-md hover:bg-amber-400">Become A Host</li>
            <button className="px-3 py-1 border-amber-400 border-[1px] text-white rounded-md hover:bg-amber-400">Login</button>
            <button className="px-3 py-1 border-amber-400 border-[1px] text-white rounded-md hover:bg-amber-400">Sign Up</button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
