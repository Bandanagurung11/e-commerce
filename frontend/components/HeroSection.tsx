import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <main className="flex-1">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Women's Fashion - Large Section */}
      <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-[#ffeee8] rounded-lg overflow-hidden relative">
        <div className="p-8 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold italic mb-4">Womens fashion</h2>
          <p className="text-gray-600 mb-6 max-w-xs">
            Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt labore edolore magna aliquapendisse ultrices gravida.
          </p>
          <div>
            <Button
              variant="outline"
              className="bg-transparent border-black text-black hover:bg-black hover:text-white uppercase text-xs font-semibold py-2 px-4 rounded-none"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Swhkz0WNo6oSOHu3V5RXexPGxa2R4S.png"
          alt="Women's Fashion"
          height={100}
          width={100}
          className="absolute right-0 bottom-0 h-full object-cover object-right"
          style={{ maxWidth: "60%" }}
        />
      </div>

      {/* Men's Fashion */}
      <div className="bg-[#e0f2f1] rounded-lg overflow-hidden relative p-6">
        <div className="z-10 relative">
          <h3 className="text-2xl font-bold mb-1">Mens fashion</h3>
          <p className="text-sm text-gray-700 mb-2">358 items</p>
          <Button
            variant="outline"
            className="bg-transparent border-black text-black hover:bg-black hover:text-white uppercase text-xs font-semibold py-1 px-3 rounded-none"
          >
            Shop Now
          </Button>
        </div>
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Men's Fashion"
          className="absolute right-0 bottom-0 h-full object-cover"
          style={{ maxWidth: "50%" }}
          height={100}
          width={100}
        />
      </div>

      {/* Kid's Fashion */}
      <div className="bg-[#e8eaf6] rounded-lg overflow-hidden relative p-6">
        <div className="z-10 relative">
          <h3 className="text-2xl font-bold mb-1">Kids fashion</h3>
          <p className="text-sm text-gray-700 mb-2">273 items</p>
          <Button
            variant="outline"
            className="bg-transparent border-black text-black hover:bg-black hover:text-white uppercase text-xs font-semibold py-1 px-3 rounded-none"
          >
            Shop Now
          </Button>
        </div>
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Kid's Fashion"
          className="absolute right-0 bottom-0 h-full object-cover"
          style={{ maxWidth: "50%" }}
          height={100}
          width={100}
        />
      </div>

      {/* Cosmetics */}
      <div className="bg-[#fce4ec] rounded-lg overflow-hidden relative p-6">
        <div className="z-10 relative">
          <h3 className="text-2xl font-bold mb-1">Cosmetics</h3>
          <p className="text-sm text-gray-700 mb-2">159 items</p>
          <Button
            variant="outline"
            className="bg-transparent border-black text-black hover:bg-black hover:text-white uppercase text-xs font-semibold py-1 px-3 rounded-none"
          >
            Shop Now
          </Button>
        </div>
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Cosmetics"
          className="absolute right-0 bottom-0 h-full object-cover"
          style={{ maxWidth: "50%" }}
          height={100}
          width={100}
        />
      </div>

      {/* Accessories */}
      <div className="bg-[#f5f5f5] rounded-lg overflow-hidden relative p-6">
        <div className="z-10 relative">
          <h3 className="text-2xl font-bold mb-1">Accessories</h3>
          <p className="text-sm text-gray-700 mb-2">792 items</p>
          <Button
            variant="outline"
            className="bg-transparent border-black text-black hover:bg-black hover:text-white uppercase text-xs font-semibold py-1 px-3 rounded-none"
          >
            Shop Now
          </Button>
        </div>
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Accessories"
          className="absolute right-0 bottom-0 h-full object-cover"
          style={{ maxWidth: "50%" }}
          height={100}
          width={100}
        />
      </div>
    </div>
  </main>
  )
}
