import React, { useState } from "react";

const PhoneNav = () => {
    const [navToggle,SetnavToggle] = useState(false);
  return (
    <>
<div id="hamburger-menu" className="absolute right-1 h-full ">
         <button id="hamButton" onClick={()=>SetnavToggle(!navToggle)} ><i className="fa-solid fa-bars text-white mr-7 mt-5 align-middle content-center text-3xl hover:cursor-pointer md:collapse " ></i></button>
       </div>

    <div id="phone-nav" className={`fixed z-2 bg-slate-900 w-[15rem] mt-14 h-full -right-[15rem] content-center ${navToggle ? "right-[0rem]" : "-right-[]15rem"} transition-all duration-300`}>
      <ul className="absolute top-[10rem] right-[4rem] text-white flex flex-col gap-12 text-2xl hover:cursor-pointer">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      
       </>
  )
}

export default PhoneNav