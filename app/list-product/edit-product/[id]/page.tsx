"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"


export default function EditProduct() {
    const [product, setProduct] = useState<any>({})
    const params = useParams()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await fetch(`api/list-product/${params.id}`)
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setProduct(data)
        } else {
            alert(data.message)
        }
    }

    return (
        <section className="items-center flex justify-center min-h-screen bg-slate-100">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3 shadow-md">
                        <h1 className="font-arial text-darkb font-semibold text-2xl">Edit Produk</h1>
                        <input className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" autoComplete="off" placeholder="Nama Produk"/>
                        <input className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" autoComplete="off" placeholder="Jumlah Produk"/>
                        <input className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" autoComplete="off" placeholder="Harga Produk"/>
                        <button className="border rounded-md w-full py-1 font-arial bg-green-500 border-green-500 text-white hover:bg-green-700 hover:border-green-700 duration-200 cursor-pointer">Edit Produk</button>
                    </div>
                </div>
            </div>
        </section>

    )
}