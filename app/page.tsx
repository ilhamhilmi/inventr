"use client"
import HeroClient from "@/components/hero/HeroClient/page";
import TargetCursorClient from "@/components/TargetCursor/TargetCursorClient/TargetCursorClient"
import NavbarClient from "@/components/Navbar/Navbar";
import Link from "next/link";
import RotatingTextClient from "@/components/hero/RotatingText/RotatingTextClient/RotatingTextClient";




export default function Home() {
  return (
    <div>
      <NavbarClient />
      <section className="h-screen items-center justify-center flex pt-16">
        <TargetCursorClient />
        <HeroClient />
        <div className="container mx=auto flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center space-y-3 max-w-xs xl:max-w-md">
            <h1 className="font-poppins tracking-widest text-white font-bold text-[50px] text-center xl:text-[68px]">Build your<RotatingTextClient />space.</h1>
            <h2 className="font-poppins text-slate-500 text-center text-sm">Manage items, track stock, and build your personal inventory space with speed, clarity, and efficiency.</h2>
          </div>
          <div className="flex flex-col xl:flex-row xl:space-y-0 xl:space-x-6 items-center justify-center mt-3.5 space-y-2">
            <Link href="/register-operator" className="font-poppins text-black px-5 py-2.5 bg-white border-white border cursor-target">Get started</Link>
            <Link href="/inventory" className="font-poppins border px-5 py-2.5 text-white cursor-target">Open your inventory</Link>
          </div>
        </div>
      </section>
    </div >
  );
}
