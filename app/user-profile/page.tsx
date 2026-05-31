"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import showPass from "@/public/password/eye-alt-svgrepo-com.svg"
import hidePass from "@/public/password/eye-slash-alt-svgrepo-com.svg"

export default function UserProfile() {

    const [showPassword, setShowPassword] = useState(false)
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

    const handleDelete = async () => {
        await fetch("api/delete-profile", {
            method: "DELETE"
        })

        window.location.href = "/login-operator"
    }

    const handleLogout = async () => {
        await fetch("/api/logout", {
            method: "POST",
        });

        window.location.href = "/login-operator"
    }

    return (
        <section className="items-center flex justify-center min-h-screen bg-slate-100">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3 shadow-md">
                        <h1 className="font-arial text-darkb font-semibold text-2xl">Akun Kamu</h1>
                        <input value={user?.username || ""} readOnly className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Nama Pengguna" autoComplete="off"
                        />
                        <div className="relative">
                            <input value={user?.password || ""} readOnly type={showPassword ? "text" : "password"} className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Kata Sandi" autoComplete="off" />
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                                <Image src={showPassword ? hidePass : showPass} alt={showPassword ? "Hide password" : "Show password"} width={20} height={20} />
                            </button>
                        </div>
                        <a href="/edit-profile"><button className="border rounded-md w-full py-1 font-arial bg-primary border-primary text-white hover:bg-sky-600 duration-200 cursor-pointer">Edit Akun</button></a>
                        <button onClick={handleDelete} className="border rounded-md w-full py-1 font-arial bg-red-500 border-red-500 text-white hover:bg-red-700 hover:border-red-700 duration-200 cursor-pointer mt-2">Hapus Akun</button>
                        <button onClick={handleLogout} className="border rounded-md w-full py-1 font-arial bg-red-500 border-red-500 text-white hover:bg-red-700 hover:border-red-700 duration-200 cursor-pointer mt-2">Logout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}