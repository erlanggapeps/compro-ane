"use client"
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menu,setMenu] = useState(false)
    return (
        <div className="w-full py-1 h-auto bg-black">
            <div className="flex justify-between max-w-7xl mx-auto ">
                <img className="w-[110px] h-[30px] my-auto" src="/logoUtama.png" alt="" />
                <div className="lg:flex hidden gap-14 justify-around py-4">
                    <Link href="/" className="font-medium text-white hover:scale-150 hover:font-bold duration-200">Home</Link>
                    <Link href="/about" className="font-medium text-white hover:scale-150 hover:font-bold duration-200">About</Link>
                    <Link href="/service" className="font-medium text-white hover:scale-150 hover:font-bold duration-200">Service</Link>
                    <Link href="/teams" className="font-medium text-white hover:scale-150 hover:font-bold duration-200">Teams</Link>
                </div>
                <div className="lg:flex hidden px-5 py-4">
                    <button className="bg-transparent px-3 text-white">Contact Us</button>
                </div>
                    <button onClick={()=>setMenu(true)} className="lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" width={40} viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg></button>
                <div className={clsx("lg:hidden fixed h-full w-screen top-0 bottom-0 bg-black/50 -translate-x-full", menu && "translate-x-0 transition-all duration-1000")}>
                    <div className="flex flex-col w-40 h-screen absolute right-0 p-8 gap-3 bg-white">
                        <button onClick={()=>setMenu(false)}><svg xmlns="http://www.w3.org/2000/svg" width={40} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg></button>
                        <Link onClick={()=>setMenu(false)} href="/" className="font-medium text-sky-700">Home</Link>
                        <Link onClick={()=>setMenu(false)} href="/about" className="font-medium text-sky-700">About</Link>
                        <Link onClick={()=>setMenu(false)}href="/service" className="font-medium text-sky-700">Service</Link>
                        <Link onClick={()=>setMenu(false)} href="/teams" className="font-medium text-sky-700">Teams</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}