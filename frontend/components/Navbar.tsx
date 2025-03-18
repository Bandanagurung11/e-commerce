import React from 'react'
import { Heart, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
   

    <div className="flex gap-8 items-center">
      <p>Home</p>
      <p>Womens</p>
      <p>Mens</p>
      <p>Shop</p>
      <p>Pages</p>
      <p>Blog</p>
      <p>Contact</p>
    </div>
    <div className="flex gap-4 items-center">
      <p>Login/Register</p>
      <Heart />
      <ShoppingBag />
    </div>
  </div>
  )
}
