"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function ListProduct() {

  const [product, setProduct] = useState<any>([])

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const res = await fetch("api/list-product")
    const data = await res.json()

    console.log(data)

    if (res.ok) {
      setProduct(data)
    } else {
      alert(data.message)
    }
  }

  const handleDelete = async (id: number) => {
    const res = await fetch("api/delete-product", {
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
      alert("Berhasil hapus produk")
      getProduct()
    } else {
      alert(data.message)
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">List Produk</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {product.map((item: any) => (

          <div
            key={item.id}
            className="overflow-hidden rounded-2xl bg-white shadow-md"
          >

            <div className="flex h-52 items-center justify-center bg-gray-200">
              <span className="text-gray-500">Gambar Produk</span>
            </div>

            <div className="p-4">

              <h2 className="text-xl font-semibold">
                Id Produk: {item.id}
              </h2>

              <h2 className="text-xl font-semibold">
                Nama Produk: {item.product_name}
              </h2>

              <p className="mt-2 text-gray-600">
                Jumlah Produk:
                <span className="font-bold">
                  {item.stock}
                </span>
              </p>

              <p className="mt-2 text-gray-600">
                Harga Produk:
                <span className="font-bold">
                  {item.price}
                </span>
              </p>
            </div>
            <div className="flex justify-center py-2 space-x-3">
              <button onClick={() => handleDelete(item.id)} className="border cursor-pointer border-red-500 bg-red-500 rounded-md text-white font-poppins px-2 py-1 hover:bg-red-700 hover:border-red-700 duration-200">Hapus Produk</button>
              <Link href={`/list-product/edit-product/${item.id}`} className="border cursor-pointer border-primary bg-primary rounded-md text-white font-poppins px-2 py-1 hover:bg-sky-700 hover:border-sky-700 duration-200">Edit Produk</Link>
            </div>
          </div>

        ))}

      </div >
    </main >
  );
}