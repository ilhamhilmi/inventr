"use client"
import { useState, useEffect } from "react"
export default function Dashboard() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <section className="items-center flex justify-center min-h-screen bg-slate-100">
            <div>Login Berhasil</div>
        </section>
    )
}