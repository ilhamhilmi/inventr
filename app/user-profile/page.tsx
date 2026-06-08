"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import showPass from "@/public/password/eye-svgrepo-com.svg"
import hidePass from "@/public/password/eye-slash-svgrepo-com.svg"

import TargetCursorClient from "@/UI components/TargetCursor/TargetCursorClient/TargetCursorClient"
import LightRaysClient from "@/UI components/LightRays/LightRaysClient/LightRaysClient"
import DockClient from "@/UI components/dock/DockClient/page"

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
        await fetch("/api/delete-profile", {
            method: "DELETE"
        })

        window.location.href = "/"
    }

    const handleLogout = async () => {
        await fetch("/api/logout", {
            method: "POST",
        });

        window.location.href = "/"
    }

    return (
        <section className="items-center flex justify-center h-screen">
            <DockClient />
            <TargetCursorClient />
            <LightRaysClient />
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white/5 backdrop-blur-xl rounded-md text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3">
                        <h1 className="font-poppins text-white font-semibold text-2xl tracking-wider">Your Account</h1>
                        <input value={user?.username || ""} readOnly className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Username" autoComplete="off" />
                        <div className="relative">
                            <input value={user?.password || ""} readOnly type={showPassword ? "text" : "password"} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Password" autoComplete="off" />
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                                <Image src={showPassword ? hidePass : showPass} alt={showPassword ? "Hide password" : "Show password"} width={20} height={20} />
                            </button>
                        </div>
                        <a href="/edit-profile"><button className="border rounded-md w-full py-1 font-arial bg-white border-white cursor-target text-black font-poppins cursor-pointer">Edit Account</button></a>
                        <button onClick={handleDelete} className="border rounded-md w-full py-1 font-arial bg-red-500 border-red-500 cursor-target text-white font-poppins cursor-pointer mt-2">Delete Account</button>
                        <button onClick={handleLogout} className="border rounded-md w-full py-1 font-arial bg-red-500 border-red-500 cursor-target text-white font-poppins cursor-pointer mt-2">Logout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}