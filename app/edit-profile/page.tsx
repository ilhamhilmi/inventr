"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import showPass from "@/public/password/eye-alt-svgrepo-com.svg"
import hidePass from "@/public/password/eye-slash-alt-svgrepo-com.svg"

export default function EditProfile() {

    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState<any>(null);

    useEffect(() =>{
        getProfile()
    }, [])

    const getProfile = async () => {
        const res = await fetch("api/user-profile")
        const data = await res.json()

        console.log(data)

        if(res.ok){
            setUser(data)

            setUsername(data.username)
            setPassword(data.password)
        } else{
            alert(data.message)
        }
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUpdate = async () => {
        const res = await fetch("api/edit-profile", {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const data = await res.json()

        console.log(data)

        if(res.ok){
            alert("Berhasil Update")
            window.location.href = "/user-profile"
        } else {
            alert(data.message)
        }
    }

    return (
        <section className="items-center flex justify-center min-h-screen bg-slate-100">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white text-center xl:w-1/3 w-2/3 px-6 py-10 space-y-3 shadow-md">
                        <h1 className="font-arial text-darkb font-semibold text-2xl">Edit Akun Kamu</h1>
                        <input value={username}  onChange={(e) => setUsername(e.target.value)} className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Nama Pengguna" autoComplete="off"
                        />
                        <div className="relative">
                            <input value={password} type={showPassword ? "text" : "password"}  onChange={(e) => setPassword(e.target.value)} className="border w-full p-2 rounded-md font-arial text-darkb focus:outline-0" placeholder="Kata Sandi" autoComplete="off" />
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                                <Image src={showPassword ? hidePass : showPass} alt={showPassword ? "Hide password" : "Show password"} width={20} height={20} />
                            </button>
                        </div>
                        <button onClick={handleUpdate} className="border rounded-md w-full py-1 font-arial bg-green-500 border-green-500 text-white hover:bg-green-700 hover:border-green-700 duration-200 cursor-pointer">Edit Akun</button>
                    </div>
                </div>
            </div>
        </section>
    )
}