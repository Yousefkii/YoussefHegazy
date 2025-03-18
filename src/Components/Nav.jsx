import { useState } from "react"
import PhoneNav from "./PhoneNav";

const Nav = () => {

  // function HamburgerFun(){
     let setBar = document.querySelector('#phone-nav')
  //    setBar.className="transition duration-1000 ease-in-out right-0"
  // }
   
  

  return (
    <div id="nav" className="bg-slate-900 w-full h-20 fixed mt-0">
      <PhoneNav/>
    <div id="nav-name">
       <h2 className="text-white text-3xl ml-5 mt-4 md:text-4xl absolute">
          Youssef Hegazy
       </h2>
    </div>
      
      <div id="nav-elements" className="sm:collapse md:visible text-white">
        <ul className=" absolute collapse right-2 top-6 flex flex-row gap-3 text-l md:visible hover:cursor-pointer ">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
  </div>
  )
}

export default Nav