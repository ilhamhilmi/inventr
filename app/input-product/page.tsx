"use client"

import { useState } from "react"
import Image from "next/image"

import showPass from "@/public/password/eye-alt-svgrepo-com.svg"
import hidePass from "@/public/password/eye-slash-alt-svgrepo-com.svg"

export default function InputProduct() {
    return (
        <section className="items-center flex justify-center min-h-screen bg-slate-100">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3 shadow-md">
                        <h1 className="font-arial text-darkb font-semibold text-2xl">Input Produk</h1>
                        <input className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Nama Produk" autoComplete="off" />
                        <input className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Jumlah Produk" autoComplete="off" />
                        <input type="file" accept="image/*" className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Harga Produk" autoComplete="off" />
                        <button className="border rounded-md w-full py-1 font-arial bg-primary border-primary text-white hover:bg-sky-600 duration-200 cursor-pointer">Input</button>
                    </div>
                </div>
            </div>
        </section>
    )
}