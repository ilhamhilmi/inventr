"use client"
import Image from "next/image";
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

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">List Produk</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {product.map((item: any) => (

          <div
            key={item.product_name}
            className="overflow-hidden rounded-2xl bg-white shadow-md"
          >

            <div className="flex h-52 items-center justify-center bg-gray-200">
              <span className="text-gray-500">Gambar Produk</span>
            </div>

            <div className="p-4">

              <h2 className="text-xl font-semibold">
                {item.product_name}
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
          </div>

        ))}

      </div >
    </main >
  );
}