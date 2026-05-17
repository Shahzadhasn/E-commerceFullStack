import React, { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const cartCount = 0

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">

     
      <div className="min-h-20 flex items-center justify-between px-6">

    
        <div className="flex items-center gap-3">
          <Menu
            className="cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
          />
          <h1 className="font-bold text-xl">ShopEase</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link className="hover:text-blue-500" to="/home">Home</Link>
          <Link className="hover:text-blue-500" to="/collections">Collections</Link>
          <Link className="hover:text-blue-500" to="/new">New</Link>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-zinc-800 transition">
          <ShoppingBag size={18} />
          <span className="text-sm">Cart</span>

          {/* Badge */}
          <span className="ml-1 bg-red-500 text-xs px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/50 md:hidden">
          <div className="w-64 bg-white h-full p-5">

            {/* Close Button */}
            <div className="flex justify-end">
              <X className="cursor-pointer" onClick={() => setOpen(false)} />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5 mt-10 font-medium">
              <Link onClick={() => setOpen(false)} to="/home">Home</Link>
              <Link onClick={() => setOpen(false)} to="/collections">Collections</Link>
              <Link onClick={() => setOpen(false)} to="/new">New</Link>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar