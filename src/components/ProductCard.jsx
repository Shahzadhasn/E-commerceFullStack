import React from 'react'

const ProductCard = ({image,category,name,price}) => {
    
  return (
    <div>
            <div className='relative bg-gray-200 h-90 flex items-center justify-center overflow-hidden'>
                <img
                  src={image}
                    alt="Product Image                      "
                  className="w-full h-full object-contain p-6 hover:scale-105  transition duration-300"
/> 
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white transition">
                                        +
                        </button>
            </div>

             <p className="text-sm tracking-wide text-zinc-500 mt-3 p-2">
               {category}
            </p>

            <div className='flex justify-between items-center p-2'>
                <h1 className='text-base font-semibold '>{name}</h1>
                <p className='text-sm font-semibold'>Rs. {price}</p>
            </div>

    </div>
  )
}

export default ProductCard