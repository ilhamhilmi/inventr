"use client"
import Image from "next/image";
import { useState, useEffect } from "react";


export default function ListProduct() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">List Produk</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Card */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          
          {/* Tempat Gambar */}
          <div className="flex h-52 items-center justify-center bg-gray-200">
            <span className="text-gray-500">Gambar Produk</span>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Nama Produk */}
            <h2 className="text-xl font-semibold">
              Nama Produk
            </h2>

            {/* Jumlah Produk */}
            <p className="mt-2 text-gray-600">
              Jumlah Produk: <span className="font-bold">0</span>
            </p>

            <p className="mt-2 text-gray-600">
              Harga Produk: <span className="font-bold">0</span>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}