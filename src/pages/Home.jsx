import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import NewPro from '../components/NewPro'

const Home = () => {
  return (
    <div className='min-h-screen p-10'>
            <Navbar/>
            <Hero/>
            <NewPro/>
    </div>
  )
}

export default Home