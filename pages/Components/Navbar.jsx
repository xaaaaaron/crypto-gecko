import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  const menuItems = [
    { title: "Home", url: "#" },
    { title: "Crypto", url: "#" },
    { title: "About", url: "#" }
  ];
 return (
  <header
       className={`sticky-top top-0 z-50 w-full backdrop-filter backdrop-blur-lg bg-black/50 fixed z-10 trasition ease-in-out duration-500 ${
         animateHeader && "shadow-xl"
       }`}
     >
       <div className="max-w-7xl mx-auto ">
         <div
           className={`flex max-w-screen-xl px-20 py-10 ${
             animateHeader && "py-5"
           } mx-auto items-center justify-between px-8 trasition ease-in-out duration-500`}
         >
           <a
             href="https://themeptation.net"
             className="text-xl font-bold tracking-tighter text-indigo-400 pr-8 border-b-2 border-indigo-400"
           >
             CryptoGecko
           </a>
           <nav className="p-2 bg-transparent">
             <ul className="flex items-center justify-start">
               {menuItems?.map((item) => (
                 <li className="bg-transparent" key={item?.title}>
                   <Link className="" legacyBehavior href={item?.url}>
                     <a className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500 bg-transparent">
                       {item?.title}
                     </a>
                   </Link>
                 </li>
               ))}
             </ul>
           </nav>
         </div>
       </div>
     </header>
  );

};

export default Navbar;