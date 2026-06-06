"use client"

import { useState } from "react"
import Image from "next/image"

import dynamic from "next/dynamic"
import Hero from "@/UI components/hero/Hero"

export default function InputProduct() {

    const TargetCursor = dynamic(
        () => import("@/UI components/TargetCursor/TargetCursor"),
        { ssr: false }
    )

    const [product_name, setProduct_name] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = async () => {
        const res = await fetch("api/input-product", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                product_name,
                stock,
                price
            })
        })

        const data = await res.json()

        console.log(data)

        if (res.ok) {
            alert("Berhasil tambah produk");
            window.location.href = "/inventory"
        } else {
            alert(data.message)
        }
    }



    return (
        <section className="items-center flex justify-center h-screen">
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
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white/5 backdrop-blur-xl rounded-md text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3">
                        <h1 className="font-poppins text-white font-semibold text-2xl tracking-wider">Input Produk</h1>
                        <input value={product_name} onChange={(e) => setProduct_name(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Nama Produk" autoComplete="off" />
                        <input value={stock} onChange={(e) => setStock(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Jumlah Produk" autoComplete="off" />
                        <input value={price} onChange={(e) => setPrice(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Harga Produk" autoComplete="off" />
                        {/* <input type="file" accept="image/*" className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Harga Produk" autoComplete="off" /> */}
                        <button onClick={handleSubmit} className="border rounded-md w-full py-1 font-arial bg-green-500 border-green-500 cursor-target text-white font-poppins cursor-pointer">Input</button>
                    </div>
                </div>
            </div>
        </section>
    )
}