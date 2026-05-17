import React from 'react'
import { Search, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex min-h-screen p-10 gap-8 bg-white'>

      {/* LEFT */}
      <div className="w-[25%] flex flex-col p-5">

        {/* Categories */}
        <div className='flex flex-col gap-5 text-sm text-zinc-600 uppercase'>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </div>

        {/* Search */}
        <div className="flex items-center border px-3 py-3 mt-10">
          <Search size={18} />

          <input
            type="text"
            placeholder='Search'
            className='ml-2 w-full outline-none'
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-black mt-16 leading-none uppercase">
          New
          <br />
          Collection
        </h1>

        {/* Subtitle */}
        <p className='mt-4 text-zinc-500'>
          Summer 2026
        </p>

        {/* Button */}
        <button className="mt-16 flex items-center justify-between border w-52 px-5 py-3 hover:bg-black hover:text-white transition">
          <span>Go To Shop</span>
          <ArrowRight size={18} />
        </button>

      </div>

      {/* IMAGE 1 */}
      <div className="w-[35%] h-[650px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* IMAGE 2 */}
      <div className="w-[35%] h-[650px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className='w-full h-full object-cover'
        />
      </div>

    </div>
  )
}

export default Hero