"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import UserIcon from "@/public/UserProfile/user-icon-svgrepo-com.svg"
import Link from "next/link";


export default function NavbarClient() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        const userId = document.cookie.includes("user_id")

        setIsLoggedIn(userId)
    }, [])

    return (
        <div>
            {/* Mobile Start */}
            <header className="xl:hidden w-full z-50 fixed top-0 left-0 flex items-center justify-center px-4">
                <nav ref={menuRef} className="xl:w-3/4 w-full p-6 bg-transparent flex items-center justify-between relative">
                    <Link href="/" className="text-white font-poppins tracking-[15px] font-extralight text-xl uppercase">inventr</Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <span className={`w-6.5 h-0.5 my-2 block bg-white transform transition-all duration-300 ${isOpen ? 'rotate-46 translate-y-1.25' : 'rotate-0 translate-y-0 scale-100'}`}></span>
                        <span className={`w-6.5 h-0.5 my-2 block bg-white transform transition-all duration-300 ${isOpen ? '-rotate-46 -translate-y-1.25' : 'rotate-0 translate-y-0'}`}></span>
                    </button>

                    <div className={`bg-white/5 backdrop-blur-xl shadow-md border border-slate-200 absolute left-0 top-full mt-3.5 rounded-4xl w-full px-6 transition-all duration-250 ease-in-out text-center flex flex-col space-y-5 ${isOpen ? 'max-h-100 opacity-100 py-4 pointer-events-auto visible' : 'max-h-0 opacity-0 py-0 pointer-event-none invisible'}`}>
                        {isLoggedIn ? (<Link onClick={() => setIsOpen(false)} href="/user-profile" className="text-white font-semibold text-xl">Account Information</Link>) : (<Link onClick={() => setIsOpen(false)} href="/login-operator" className="text-white font-semibold text-xl">Login</Link>)}
                        <Link onClick={() => setIsOpen(false)} href="/" className="text-white font-semibold text-xl">Features</Link>
                    </div>

                </nav>
            </header>
            {/* Mobile End */}

            {/* Desktop Start */}
            <header className="hidden w-full z-50 fixed top-0 left-0 xl:flex items-center justify-center">
                <nav className="bg-transparent w-full p-6 flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-white text-xl font-poppins tracking-[15px] font-extralight uppercase">inventr</Link>
                    </div>
                    {/* <div className="space-x-12">
                        <a href="" className="font-poppins tracking-wider px-3 py-1.5 cursor-target text-white text-md">Features</a>
                        <a href="/login-operator" className="font-poppins tracking-wider px-3 py-1.5 cursor-target text-white text-md">Login</a>
                    </div> */}
                    {isLoggedIn ? (
                        <div className="flex items-center space-x-12">
                            <Link href="/" className="font-poppins tracking-wider px-3 py-2 cursor-target text-white text-md border border-white">Features</Link>
                            <Link href="/user-profile" className=" cursor-target text-white text-md border border-white bg-white p-2">
                                <Image src={UserIcon} alt="UserIcon" width={20} height={20} />
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-12">
                            <Link href="/" className="font-poppins tracking-wider px-3 py-2 cursor-target text-white text-md  border border-white">Features</Link>
                            <Link href="/login-operator" className="font-poppins tracking-wider px-3 py-2 cursor-target text-black text-md border border-white bg-white">Login</Link>
                        </div>
                    )}
                </nav>
            </header>
            {/* Desktop End */}


        </div>
    );
}