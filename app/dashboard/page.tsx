"use client"
import { useState, useEffect } from "react"
import { POST } from "../api/login-operator/route"

export default function Dashboard() {
    const [showPassword, setShowPassword] = useState(false)

    const handleLogout = async () => {
        await fetch("/api/logout", {
            method: "POST",
        });

        window.location.href = "/login-operator"
    }

    return (
        <section className="items-center flex justify-center min-h-screen bg-slate-100">
            <div>Login Berhasil</div>
            <button onClick={handleLogout} className="border border-red-500 rounded-md p-3 text-white font-bold bg-red-500 cursor-pointer hover:bg-red-700 hover:border-red-700">Logout</button>
        </section>
    )
}