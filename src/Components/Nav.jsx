import { useState } from "react"
import PhoneNav from "./PhoneNav";
import './Nav.css'

const Nav = () => {

  // function HamburgerFun(){
     let setBar = document.querySelector('#phone-nav')
  //    setBar.className="transition duration-1000 ease-in-out right-0"
  // }
   
  

  return (
    <div id="nav" className="">
      
    <div id="nav-name" className="flex flex-row pt-7">
      <div className="flex flex-row">
       <h2 className="text-black text-3xl ml-5 mt-4 md:text-4xl absolute">
          Youssef Hegazy
       </h2>
       <PhoneNav/>
      <div className="!hidden md:!block">
        <ul className=" absolute flex flex-row gap-4 right-1 mr-4 pt-6 text-xl hover:cursor-pointer ">
        <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
    </div>
      
      
  </div>
  )
}

export default Nav