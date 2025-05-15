import { useState } from "react";
import looksaw_icon from "../assets/looksaw_icon.png"
import navLink from "../constants"
import { LogOut, Menu } from "lucide-react";
export const NavBar = () => {
  const [toggle ,setToggle] = useState(true)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={looksaw_icon} alt = "looksaw_icon" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLink.map((nav,index) => (
          <li
          key={nav.id}
          className={`font-serif font-normal cursor-pointer text-[16px]
            ${index === navLink.length - 1 ? "mr-0" : "mr-10" }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? 
        <Menu color="#252b2d" onClick={() => setToggle((prev) => !prev)}/>
        : <LogOut color="#252b2d" onClick={() => setToggle((prev) => !prev)} />}
      </div>
    </nav>
  )
}
