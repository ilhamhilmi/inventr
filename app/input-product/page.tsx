"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


import Image from "next/image"

import TargetCursorClient from "@/UI components/TargetCursor/TargetCursorClient/TargetCursorClient"
import LightRaysClient from "@/UI components/LightRays/LightRaysClient/LightRaysClient"
import DockClient from "@/UI components/dock/DockClient/page"


export default function InputProduct() {
    const [product_name, setProduct_name] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")

    const router = useRouter()

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
            toast.success("Successfully input product");
            router.push("/inventory")
        } else {
            toast.error(data.message)
        }
    }



    return (
        <section className="items-center flex justify-center h-screen">
            <DockClient />
            <TargetCursorClient />
            <LightRaysClient />
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white/5 backdrop-blur-xl rounded-md text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3">
                        <h1 className="font-poppins text-white font-semibold text-2xl tracking-wider">Input Product</h1>
                        <input value={product_name} onChange={(e) => setProduct_name(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Product Name" autoComplete="off" />
                        <input value={stock} onChange={(e) => setStock(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Stock" autoComplete="off" />
                        <input value={price} onChange={(e) => setPrice(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Price" autoComplete="off" />
                        {/* <input type="file" accept="image/*" className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Price" autoComplete="off" /> */}
                        <button onClick={handleSubmit} className="border rounded-md w-full py-1 font-arial bg-green-500 border-green-500 cursor-target text-white font-poppins cursor-pointer">Input</button>
                    </div>
                </div>
            </div>
        </section>
    )
}