import React from "react";
// import BarIcon from "./BarIcon";
// import { LuDownload } from "react-icons/lu";
// import resume from "@/public/assets/Resume.pdf";
import ThemeController from "./ThemeSwitcher";
import Link from "next/link.js";
const NavBar = () => {
  return (
    <section
      id="NavBar"
      className="fixed top-0 left-0 right-0 h-[58px] w-screen p-4 z-40 flex flex-row opacity-90 dark:opacity-80 bg-slate-600 dark:bg-gray-900 text-slate-300  dark:text-slate-100 shadow justify-around"
    >
      <div className="text-slate-50 dark:text-slate-50 italic font-extralight  top-[50%] cursor-pointer">
        <p className="mobi:text-xs sm:text-2xl bg-gradient-to-t from-slate-50 to-violet-500 bg-clip-text text-transparent">Gregory Pounds</p>
      </div>
      <div className="flex flex-row text-slate-300 dark:text-slate-200 pr-4  justify-around">
          <Link href={"/"}>
            <p className="border-violet-500 hover:text-blue-400 dark:border-violet-300 border-opacity-30 border-r-2 px-3 cursor-crosshair mobi:text-xs sm:text-base">
              Home
            </p>
          </Link>
          <a
            className="border-violet-500 dark:border-violet-300 hover:text-blue-400 border-opacity-30 border-r-2 px-3 cursor-crosshair mobi:text-xs sm:text-base"
            href={"#contact"}
          >
            Contact
          </a>
        {/* <a
          className="border-violet-500 dark:border-violet-300 border-opacity-30 border-r-2 px-3"
          href={resume}
          download="GregoryPounds_Resume"
        >
          <BarIcon icon={<LuDownload />} tooltip={"Resume"}></BarIcon>
        </a> */}
      </div>
    </section>
  );
};
export default NavBar;
