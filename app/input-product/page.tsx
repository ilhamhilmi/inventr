"use client"

import { useState } from "react"
import Image from "next/image"

export default function InputProduct() {

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

        if(res.ok){
            alert("Berhasil tambah produk");
            // window.location.href = "/list-product"
        } else{
            alert(data.message)
        }
    }



    return (
        <section className="items-center flex justify-center min-h-screen bg-slate-100">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3 shadow-md">
                        <h1 className="font-arial text-darkb font-semibold text-2xl">Input Produk</h1>
                        <input value={product_name} onChange={(e) => setProduct_name(e.target.value)} className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Nama Produk" autoComplete="off" />
                        <input value={stock} onChange={(e) => setStock(e.target.value)} className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Jumlah Produk" autoComplete="off" />
                        <input value={price} onChange={(e) => setPrice(e.target.value)} className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Harga Produk" autoComplete="off" />
                        {/* <input type="file" accept="image/*" className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Harga Produk" autoComplete="off" /> */}
                        <button onClick={handleSubmit} className="border rounded-md w-full py-1 font-arial bg-primary border-primary text-white hover:bg-sky-600 duration-200 cursor-pointer">Input</button>
                    </div>
                </div>
            </div>
        </section>
    )
}