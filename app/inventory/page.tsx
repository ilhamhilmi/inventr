"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Image from "next/image";
import SearchIcon from "@/public/Search/search-svgrepo-com.svg"

export default function Inventory() {
    const [product, setProduct] = useState<any>([])

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await fetch("/api/inventory")
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setProduct(data)
        } else {
            toast.error(data.message)
        }
    }

    const handleDelete = async (id: number) => {
        const res = await fetch("/api/delete-product", {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                id
            })
        })

        const data = await res.json()

        console.log(data)

        if (res.ok) {
            toast.success("Product deleted")
            getProduct()
        } else {
            toast.error(data.message)
        }
    }

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

    const [total, setTotal] = useState<any>()
    const totalProduct = async () => {
        const res = await fetch("/api/total-count")
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setTotal(data.total)
        } else {
            toast.error(data.message)
        }
    }

    useEffect(() => {
        totalProduct()
    }, [])


    const [lowStock, setLowStock] = useState()
    const lowStockProduct = async () => {
        const res = await fetch("/api/low-stock")
        const data = await res.json()

        console.log(data)

        if (res.ok) {
            setLowStock(data.lowStock)
        } else {
            toast.error(data.message)
        }
    }

    useEffect(() => {
        lowStockProduct()
    }, [])

    const [search, setSearch] = useState("")

    const searchProducts = async () => {

        const res = await fetch(`/api/inventory?search=${search}`)

        const data = await res.json()

        if (res.ok) {
            setProduct(data)
        } else {
            toast.error("Product not found")
        }

    }

    return (
        <div className="min-h-screen bg-white text-black font-['Inter',sans-serif]">
            {/* Top Navigation Bar */}
            <nav className="border-b-[3px] border-black bg-white sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-neo-yellow border-[3px] border-black flex items-center justify-center font-black text-sm">
                                I
                            </div>
                            <span className="font-black text-lg tracking-tight">INVENTR</span>
                        </Link>

                        <div className="flex items-center gap-3">
                            <Link href="/input-product"
                                className="font-bold text-xs uppercase tracking-wider px-4 py-2 bg-neo-yellow border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                                + Add Product
                            </Link>
                            <div className="flex items-center gap-2">
                                <Link href="/user-profile"
                                    className="w-8 h-8 border-[3px] border-black flex items-center justify-center font-black text-xs hover:bg-gray-100 transition-colors">
                                    U
                                </Link>
                                <Link href="/"
                                    className="w-8 h-8 border-[3px] border-black flex items-center justify-center font-black text-xs hover:bg-gray-100 transition-colors">
                                    H
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
                            Inventory
                            {user && <span className="block text-lg font-bold mt-1 opacity-60 normal-case">Hello again, {user.username}!</span>}
                        </h1>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg">
                        <div className="border-[3px] border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <p className="text-xs font-bold uppercase tracking-wider opacity-60">Total Products</p>
                            <p className="text-3xl font-black mt-1">{total || 0}</p>
                        </div>
                        <div className="border-[3px] border-black p-4 bg-neo-pink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <p className="text-xs font-bold uppercase tracking-wider text-white/80">Low Stock</p>
                            <p className="text-3xl font-black mt-1 text-white">{lowStock || 0}</p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex gap-2 mb-8 max-w-xl">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            className="flex-1 border-[3px] border-black p-3 font-medium text-sm focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                            placeholder="Find something..."
                            onKeyDown={(e) => e.key === "Enter" && searchProducts()}
                        />
                        <button
                            onClick={searchProducts}
                            className="px-4 border-[3px] border-black bg-black hover:bg-gray-800 transition-colors"
                        >
                            <Image src={SearchIcon} alt="Search" width={20} height={20} className="invert" />
                        </button>
                    </div>

                    {/* Product Grid */}
                    {product.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="inline-block border-[3px] border-black p-6 bg-neo-yellow shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <p className="font-black text-lg uppercase">No products yet</p>
                                <p className="font-medium text-sm mt-2 opacity-70">Start by adding your first product!</p>
                                <Link href="/input-product"
                                    className="inline-block mt-4 px-6 py-3 border-[3px] border-black bg-white font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-100">
                                    Add Product
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
                                >
                                    {/* Color bar */}
                                    <div className="h-2 bg-neo-cyan border-b-[3px] border-black" />

                                    <div className="p-5 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold uppercase tracking-wider opacity-50">ID #{item.id}</span>
                                            {item.stock <= 5 && (
                                                <span className="text-[10px] font-black uppercase px-2 py-1 bg-neo-pink border-[2px] border-black">
                                                    Low Stock
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="font-black text-xl uppercase tracking-tight">{item.product_name}</h3>

                                        <div className="grid grid-cols-2 gap-3 pt-2 border-t-[2px] border-black/10">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider opacity-50">Stock</p>
                                                <p className="font-black text-lg">{item.stock}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider opacity-50">Price</p>
                                                <p className="font-black text-lg">${item.price}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 pt-2">
                                            <Link
                                                href={`/inventory/edit-product/${item.id}`}
                                                className="flex-1 text-center py-2 border-[3px] border-black font-bold text-xs uppercase tracking-wider bg-neo-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="flex-1 py-2 border-[3px] border-black font-bold text-xs uppercase tracking-wider hover:bg-neo-red hover:text-white hover:border-neo-red shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-100"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}