"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
import toast from "react-hot-toast"

import showPass from "@/public/password/eye-svgrepo-com.svg"
import hidePass from "@/public/password/eye-slash-svgrepo-com.svg"

export default function EditProfile() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        const res = await fetch("api/user-profile")
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setUser(data)

            setUsername(data.username)
            setPassword(data.password)
        } else {
            toast.error(data.message)
        }
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUpdate = async () => {
        const res = await fetch("/api/edit-profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const data = await res.json()

        console.log(data)

        if (res.ok) {
            toast.success("Account updated")
            router.push ("/user-profile")
        } else {
            toast.error(data.message)
        }
    }

    return (
        <div className="min-h-screen bg-white text-black font-['Inter',sans-serif] flex items-center justify-center">
            {/* Decorative shapes */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-neo-lime border-[3px] border-black -z-10" />
            <div className="absolute bottom-10 right-10 w-52 h-52 bg-neo-yellow border-[3px] border-black -z-10" />

            {/* Back link */}
            <Link href="/user-profile" className="absolute top-6 left-6 font-bold text-sm uppercase tracking-wider border-[3px] border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
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

                    <h1 className="font-black text-2xl uppercase text-center mb-6">Edit Account</h1>

                    <div className="space-y-4">
                        <div>
                            <label className="block font-bold text-xs uppercase tracking-wider mb-1">Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full border-[3px] border-black p-3 font-medium text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                                placeholder="Username"
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label className="block font-bold text-xs uppercase tracking-wider mb-1">Password</label>
                            <div className="relative">
                                <input
                                    value={password}
                                    type={showPassword ? "text" : "password"}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border-[3px] border-black p-3 font-medium text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all pr-12"
                                    placeholder="Password"
                                    autoComplete="off"
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 border-[2px] border-black flex items-center justify-center hover:bg-gray-100 transition-colors'
                                >
                                    <Image src={showPassword ? hidePass : showPass} alt={showPassword ? "Hide password" : "Show password"} width={18} height={18} />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleUpdate}
                            className="w-full py-3 bg-neo-cyan border-[3px] border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}