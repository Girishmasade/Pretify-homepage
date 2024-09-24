import React from 'react'
import right from '/Images/right.svg'
import play from '/Images/play.svg'
import cloth from '/Images/clothes.svg'
import '../Style/HeroSection.css'

const Herosection = () => {
  return (
    <header className='grid min-h-screen grid-cols-1 sm:grid-cols-2 justify-evenly items-center ml-44'>
      <div className="w-2/3">
        <h1 className='text-5xl font-bold'>Create and sell custom products</h1>
       <div className='pt-8 pl-2 space-y-1'>
       <p  className='flex font-bold'><img src={right} alt="right-icon" className='p-1'/>100% Free to use
        </p>
        <p className='flex font-bold'><img src={right} alt="right-icon" className='p-1'/>900+ High-Quality Products
        </p>
        <p className='flex font-bold'><img src={right} alt="right-icon" className='p-1'/>Largest global print network
        </p>
        </div>
        <div className="pt-5 space-x-4 flex">
            <button className='bg-green-500 border-black p-3 rounded font-bold text-white'>Start for free</button>
            <button className='p-3 rounded homeBtn'> <img src={play} alt="play" className='playbtn'/> How it works?</button>
        </div>
        <div className="pt-3">
        <p className='text-green-700 font-bold'>Trusted by over 8M sellers around the world</p>
        </div>
      </div>
      <div className="relative right-12 -z-40">
       <img src={cloth} alt="cloth image" className='-z-40'/>
      </div>
    </header>
  )
}


export default Herosection
