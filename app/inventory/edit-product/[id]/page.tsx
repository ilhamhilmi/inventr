"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import LightRaysClient from "@/UI components/LightRays/LightRaysClient/LightRaysClient"
import TargetCursorClient from "@/UI components/TargetCursor/TargetCursorClient/TargetCursorClient"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function EditProduct() {

    const router = useRouter()
    // const [product, setProduct] = useState<any>({})
    const params = useParams()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await fetch(`/api/inventory/${params.id}`)
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setProductName(data.product_name)
            setStock(data.stock)
            setPrice(data.price)
        } else {
            toast.error(data.message)
        }
    }

    const [productName, setProductName] = useState("")
    const [stock, setStock] = useState("")
    const [price, setPrice] = useState("")

    const handleUpdate = async () => {
        const res = await fetch(`/api/edit-product/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productName,
                stock,
                price
            })
        })

        const data = await res.json()

        console.log(data)

        if (res.ok) {
            toast.success("Product Updated")
            router.push ("/inventory")
        } else {
            toast.error(data.message)
        }
    }

    return (
        <section className="items-center flex justify-center h-screen">
            <TargetCursorClient />
            <LightRaysClient />
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white/5 backdrop-blur-xl rounded-md text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3">
                        <h1 className="font-poppins text-white font-semibold text-2xl tracking-wider">Edit Product</h1>
                        <input value={productName} onChange={(e) => setProductName(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" autoComplete="off" placeholder="Product Name" />
                        <input value={stock} onChange={(e) => setStock(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" autoComplete="off" placeholder="Stock" />
                        <input value={price} onChange={(e) => setPrice(e.target.value)} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" autoComplete="off" placeholder="Price" />
                        <button onClick={handleUpdate} className="border rounded-md w-full py-1 font-arial bg-green-500 border-green-500 cursor-target text-white font-poppins cursor-pointer">Edit Product</button>
                    </div>
                </div>
            </div>
        </section>

    )
}