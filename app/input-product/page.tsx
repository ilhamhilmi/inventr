"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import toast from "react-hot-toast"

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
        <div className="min-h-screen bg-white text-black font-['Inter',sans-serif] flex items-center justify-center">
            {/* Decorative shapes */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-neo-cyan border-[3px] border-black -z-10" />
            <div className="absolute bottom-10 right-10 w-52 h-52 bg-neo-yellow border-[3px] border-black -z-10" />
            <div className="absolute top-1/3 right-20 w-20 h-20 bg-neo-pink border-[3px] border-black -z-10" />

            {/* Back link */}
            <Link href="/inventory" className="absolute top-6 left-6 font-bold text-sm uppercase tracking-wider border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                &larr; Back
            </Link>

            <div className="w-full max-w-md mx-auto px-4">
                <div className="border-[3px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-neo-yellow border-[3px] border-black flex items-center justify-center font-black text-lg">
                            I
                        </div>
                        <span className="font-black text-2xl tracking-tight">INVENTR</span>
                    </div>

                    <h1 className="font-black text-2xl uppercase text-center mb-6">Input Product</h1>

                    <div className="space-y-4">
                        <div>
                            <label className="block font-bold text-xs uppercase tracking-wider mb-1">Product Name</label>
                            <input
                                value={product_name}
                                onChange={(e) => setProduct_name(e.target.value)}
                                className="w-full border-[3px] border-black p-3 font-medium text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                                placeholder="Enter product name"
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label className="block font-bold text-xs uppercase tracking-wider mb-1">Stock</label>
                            <input
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                className="w-full border-[3px] border-black p-3 font-medium text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                                placeholder="Enter stock quantity"
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label className="block font-bold text-xs uppercase tracking-wider mb-1">Price</label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full border-[3px] border-black p-3 font-medium text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                                placeholder="Enter price"
                                autoComplete="off"
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full py-3 bg-neo-lime border-[3px] border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}