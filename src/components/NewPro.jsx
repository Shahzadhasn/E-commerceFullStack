import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    category: "V-Neck T-Shirt",
    name: "Embroidered Shirt",
    price: 99,
  },
  {
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=800&auto=format&fit=crop",
    category: "Cotton T-Shirt",
    name: "Basic Slim Fit",
    price: 89,
  },
  {
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop",
    category: "Henley T-Shirt",
    name: "Blurred Print",
    price: 120,
  },
  {
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop",
    category: "Crewneck",
    name: "Full Sleeve Zipper",
    price: 150,
  },
  {
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    category: "Casual Shirt",
    name: "Classic White Shirt",
    price: 110,
  },
  {
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=800&auto=format&fit=crop",
    category: "Oversized Tee",
    name: "Streetwear Tee",
    price: 75,
  },
  {
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=800&auto=format&fit=crop",
    category: "Polo Shirt",
    name: "Premium Polo",
    price: 95,
  },
  {
    image: "https://images.unsplash.com/photo-1618354691229-88d47f285158?q=80&w=800&auto=format&fit=crop",
    category: "Graphic Tee",
    name: "Printed T-Shirt",
    price: 65,
  },
  {
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    category: "Jacket",
    name: "Leather Jacket",
    price: 220,
  },
  {
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    category: "Dress",
    name: "Summer Dress",
    price: 140,
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    category: "Hoodie",
    name: "Urban Hoodie",
    price: 130,
  },
  {
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop",
    category: "Denim",
    name: "Blue Denim Jacket",
    price: 170,
  },
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    category: "Women Top",
    name: "Floral Crop Top",
    price: 85,
  },
  {
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
    category: "Sneakers",
    name: "Classic Sneakers",
    price: 160,
  },
  {
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    category: "Formal Shirt",
    name: "Office Wear Shirt",
    price: 115,
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    category: "Coat",
    name: "Winter Long Coat",
    price: 250,
  },
  {
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    category: "Joggers",
    name: "Relaxed Joggers",
    price: 90,
  },
  {
    image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=800&auto=format&fit=crop",
    category: "Sweater",
    name: "Knitted Sweater",
    price: 135,
  },
  {
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop",
    category: "Blazer",
    name: "Slim Fit Blazer",
    price: 280,
  },
  {
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
    category: "Cargo Pants",
    name: "Utility Cargo",
    price: 125,
  },
]

const NewPro = () => {
  const [page, setPage] = useState(0)

  const itemsPerPage = 4
  const start = page * itemsPerPage
  const currentItems = products.slice(start, start + itemsPerPage)

  const isFirstPage = page === 0
  const isLastPage = start + itemsPerPage >= products.length

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="flex items-end justify-between">
        <div className="flex gap-6 items-start">
          <h1 className="text-4xl font-bold leading-none uppercase">
            New
            <br />
            This Week
          </h1>

          <span className="font-bold mt-3">
            ({products.length})
          </span>
        </div>

        <button>View All</button>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">
        {currentItems.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            category={item.category}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={isFirstPage}
          className="w-10 h-10 border flex items-center justify-center hover:bg-black hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => setPage(page + 1)}
          disabled={isLastPage}
          className="w-10 h-10 border flex items-center justify-center hover:bg-black hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default NewPro