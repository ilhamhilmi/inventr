"use client"

import { useState } from "react"
import Image from "next/image"

import showPass from "@/public/password/eye-svgrepo-com.svg"
import hidePass from "@/public/password/eye-slash-svgrepo-com.svg"

import TargetCursorClient from "@/UI components/TargetCursor/TargetCursorClient/TargetCursorClient"
import HeroClient from "@/UI components/hero/HeroClient/page"


export default function LoginOperator() {
    const [showPassword, setShowPassword] = useState(false)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {

        const res = await fetch("/api/login-operator", {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await res.json();

        console.log(data);

        if (res.ok) {
            alert("Login berhasil");
            window.location.href = "/inventory"
        } else {
            alert(data.message);
        }
    };

    return (
        <section className="items-center flex justify-center h-screen">
            <TargetCursorClient />
            <div className="h-full inset-0 -z-10" style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <HeroClient />
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white/5 backdrop-blur-xl rounded-md text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3">
                        <h1 className="font-poppins text-white font-semibold text-2xl tracking-wider">Welcome Back!</h1>
                        <input className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Username" autoComplete="off" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} className="cursor-target border border-slate-500 w-full p-2 rounded-md font-arial text-white focus:border-white" placeholder="Password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                                <Image src={showPassword ? hidePass : showPass} alt={showPassword ? "Hide password" : "Show password"} width={20} height={20} />
                            </button>
                        </div>
                        <button onClick={handleLogin} className="border rounded-md w-full py-1 font-arial bg-white border-white cursor-target text-black font-poppins">Login</button>
                        <a href="/register-operator"><button className="text-white px-2 py-1 cursor-target font-poppins">Create Account</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}