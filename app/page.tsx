"use client"

import Hero from "@/UI components/hero/Hero"
import RotatingText from "@/UI components/hero/RotatingText/RotatingText";
import TargetCursor from "@/UI components/TargetCursor/TargetCursor";
import dynamic from "next/dynamic"

import Image from "next/image";
import NavbarClient from "@/UI components/Navbar/Navbar";
import Link from "next/link";



export default function Home() {
  const TargetCursor = dynamic(
    () => import("@/UI components/TargetCursor/TargetCursor"),
    { ssr: false }
  )
  return (
    <div>
      <NavbarClient />
      <section className="h-screen items-center justify-center flex pt-16">
        <TargetCursor
          spinDuration={4}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
        <div className="h-full inset-0 -z-10" style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Hero
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.3}
            particleBaseSize={200}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <div className="container mx=auto flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center space-y-3 max-w-xs xl:max-w-md">
            <h1 className="font-poppins tracking-wider text-white font-bold text-[50px] text-center xl:text-[68px]">Build your <RotatingText
              texts={['Inventory', 'Storage', 'Stock']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-blue-400 overflow-hidden justify-center rounded-md"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            /> space</h1>
            <h2 className="font-poppins text-slate-500 text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda laudantium impedit quibusdam asperiores similique.</h2>
          </div>
          <div className="flex flex-col xl:flex-row xl:space-y-0 xl:space-x-6 items-center justify-center mt-3.5 space-y-2">
            <Link href="/register-operator" className="font-poppins text-black px-5 py-2.5 bg-white border-white border cursor-target">Get started</Link>
            <Link href="" className="font-poppins border px-5 py-2.5 text-white cursor-target">Open your inventory</Link>
          </div>
        </div>
      </section>
    </div >
  );
}
