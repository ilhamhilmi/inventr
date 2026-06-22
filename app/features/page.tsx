"use client"
import Link from "next/link"
import HeroClient from "@/components/hero/HeroClient/page"

export default function FeaturesPage() {
    return (
        <div>
            <section className="h-screen items-center justify-center flex">
                <HeroClient />
                <div className="container mx-auto flex items-center justify-center px-5 xl:px-0">
                    <div className="flex flex-col items-center justify-center space-y-5">
                        <h1 className="border bg-white/5 backdrop-blur-xl p-5 font-sans uppercase rounded-xl border-white/20 text-center">
                            This page is under construction, sorry :D
                        </h1>
                        <Link href="/" className="border px-3 py-2 font-sans bg-white text-black rounded-full hover:scale-[10] duration-200">Go Back</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}