"use client"

import TargetCursorClient from "@/UI components/TargetCursor/TargetCursorClient/TargetCursorClient"
import ElectricBorder from "@/UI components/ElectricBorder/ElectricBorder";


import { useState, useEffect } from "react";
import Link from "next/link";
import SplitText from "@/UI components/SplitText/SplitText";
import DockClient from "@/UI components/dock/DockClient/page";
import LightRaysClient from "@/UI components/LightRays/LightRaysClient/LightRaysClient";


export default function Inventory() {
    const [product, setProduct] = useState<any>([])

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await fetch("/api/inventory")
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setProduct(data)
        } else {
            alert(data.message)
        }
    }

    const handleDelete = async (id: number) => {
        const res = await fetch("/api/delete-product", {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                id
            })
        })

        const data = await res.json()

        console.log(data)

        if (res.ok) {
            alert("Berhasil hapus produk")
            getProduct()
        } else {
            alert(data.message)
        }
    }

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        const res = await fetch("/api/user-profile")
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setUser(data)
        } else {
            alert(data.message)
        }
    }

    const [total, setTotal] = useState<any>()
    const totalProduct = async () => {
        const res = await fetch("/api/total-count")
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setTotal(data.total)
        } else {
            alert(data.message)
        }
    }

    useEffect(() => {
        totalProduct()
    }, [])

    return (
        <div>
            <DockClient />
            <section className="min-h-screen pt-32 pb-32 relative">
                <TargetCursorClient />
                <LightRaysClient />

                <header className="flex flex-col items-center justify-center text-center space-y-3 py-3">
                    <Link href="/" className="text-white tracking-[15px] font-extralight">INVENTR</Link>
                    <div className="">
                        {user && (
                            <SplitText
                                key={user.username}
                                text={`Hello again, ${user.username}!`}
                                className="text-3xl text-white font-semibold font-poppins text-center tracking-wide"
                                delay={50}
                                duration={1.5}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                            />
                        )}
                    </div>
                    <div className="flex space-x-5 w-full xl:w-2/3 justify-center items-center px-4">
                        <ElectricBorder
                            color="#38bdf8"
                            speed={0.9}
                            chaos={0.06}
                            className="bg-white/5 border border-slate-600 backdrop-blur-md px-4 py-2.5 rounded-md w-1/2">
                            <h1 className="font-poppins text-secondary text-lg">Total Products</h1>
                            <h1 className="font-poppins text-white text-lg xl:text-3xl">{total}</h1>
                        </ElectricBorder>
                        <ElectricBorder
                            color="#38bdf8"
                            speed={0.9}
                            chaos={0.06}
                            className="bg-white/5 border border-slate-600 backdrop-blur-md px-4 py-2.5 rounded-md w-1/2">
                            <h1 className="font-poppins text-secondary text-lg">Low Stock</h1>
                            <h1 className="font-poppins text-white text-lg xl:text-3xl">2</h1>
                        </ElectricBorder>
                    </div>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-3 justify-items-center w-full">
                    {product.map((item: any) => (
                        <div key={item.id} className="w-full p-4">
                            <div className="bg-white/5 border border-slate-600 backdrop-blur-md px-4 py-2.5 rounded-md space-y-4">
                                <h1 className="font-poppins text-secondary text-lg">Product ID: <span className="text-sky-400">{item.id}</span></h1>
                                <h1 className="font-poppins text-secondary text-lg">Product Name: <span className="text-white">{item.product_name}</span></h1>
                                <h1 className="font-poppins text-secondary text-lg">Stock: <span className="text-white">{item.stock}</span></h1>
                                <h1 className="font-poppins text-secondary text-lg">Price: <span className="text-white">{item.price}</span></h1>
                                <div className="flex items-center justify-center space-x-8">
                                    <Link href={`/inventory/edit-product/${item.id}`} className="border cursor-pointer cursor-target border-white bg-white rounded-md text-black font-poppins px-3 py-1.5 hover:bg-green-500 hover:border-green-500 hover:text-white duration-200">Edit Produk</Link>
                                    <button onClick={() => handleDelete(item.id)} className="border cursor-pointer cursor-target border-white bg-white rounded-md text-black font-poppins px-3 py-1.5 hover:bg-red-500 hover:border-red-500 hover:text-white duration-200">Hapus Produk</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}