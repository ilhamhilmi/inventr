"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import showPass from "@/public/password/eye-svgrepo-com.svg"
import hidePass from "@/public/password/eye-slash-svgrepo-com.svg"

import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function UserProfile() {
    const router = useRouter()
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
            toast.error(data.message)
        }
    }

    const handleDelete = async () => {
        const res = await fetch("api/delete-profile", {
            method: "DELETE"
        })
        const data = await res.json()
        console.log(data)

        if (res.ok) {
            toast.success("Account Deleted")
            router.push("/")
        } else {
            toast.error(data.message)
        }
    }

    const handleLogout = async () => {
        await fetch("/api/logout", {
            method: "POST",
        });

        router.push("/")
    }

    return (
        <div className="min-h-screen bg-white text-black font-['Inter',sans-serif] flex items-center justify-center">
            {/* Decorative shapes */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-neo-yellow border-[3px] border-black -z-10" />
            <div className="absolute bottom-10 left-10 w-52 h-52 bg-neo-pink border-[3px] border-black -z-10" />
            <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-neo-cyan border-[3px] border-black -z-10" />

            {/* Back link */}
            <Link href="/inventory" className="absolute top-6 left-6 font-bold text-sm uppercase tracking-wider border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                &larr; Back
            </Link>

            <div className="w-full max-w-md mx-auto px-4">
                <div className="border-[3px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
                    <h1 className="font-black text-2xl uppercase text-center mb-6">Your Account</h1>

                    <div className="space-y-4">
                        <div>
                            <label className="block font-bold text-xs uppercase tracking-wider mb-1">Username</label>
                            <input
                                value={user?.username || ""}
                                readOnly
                                className="w-full border-[3px] border-black p-3 font-medium text-sm bg-gray-50 cursor-not-allowed"
                                placeholder="Username"
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label className="block font-bold text-xs uppercase tracking-wider mb-1">Password</label>
                            <div className="relative">
                                <input
                                    value={user?.password || ""}
                                    readOnly
                                    type={showPassword ? "text" : "password"}
                                    className="w-full border-[3px] border-black p-3 font-medium text-sm bg-gray-50 cursor-not-allowed pr-12"
                                    placeholder="Password"
                                    autoComplete="off"
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 border-[2px] border-black flex items-center justify-center hover:bg-gray-100 transition-colors bg-white'
                                >
                                    {showPassword ? <IoMdEyeOff size={18} /> : <IoMdEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <Link
                            href="/edit-profile"
                            className="block w-full py-3 bg-neo-yellow border-[3px] border-black font-black text-sm uppercase tracking-wider text-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
                        >
                            Edit Account
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="w-full py-3 border-[3px] border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
                        >
                            Logout
                        </button>

                        <button
                            onClick={handleDelete}
                            className="w-full py-3 bg-neo-red text-white border-[3px] border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
                        >
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}