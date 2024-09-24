import React from 'react'
import bg from '/Images/bg22.jpg'

const Profitcal = () => {
  return (
    <header>
      <div className="m-10 flex justify-center items-center relative top-[200px]">
        <div className="w-[400px] h-[450px] grid grid-rows-5 bg-cyan-800 text-white relative top-6 left-3 rounded-lg p-10">
            <h1 className='text-3xl font-bold'>Make Money, Risk-Free</h1>
            <p className='pt-5 text-sm w-full'>You pay for fulfillment only when you make a sale</p>
            <div className="grid grid-rows-4 justify-center rounded-lg text-white font-bold p-3 h-[150px] bg-slate-800">
            <div className='flex gap-28'><h4>You sell a t-shirt</h4><h1>$30</h1></div>
            <div className='flex gap-10'><h4>You pay for its production</h4><h1>$12</h1></div>
            <hr className='relative top-3'/>
            <div className='flex gap-28'><h4>You sell a t-shirt</h4><h1>$18</h1></div>
            </div>
            <div className='relative top-[100px]'><button className='bg-green-600 text-white pl-2 pr-2 pb-1 rounded pt-1 font-bold'>start selling</button></div>
        <div className='relative top-[70px]'>
          <p className='text-xs'>100% Free to use · 900+ Products · Largest print network</p>
        </div>
        </div>
        <div className="w-[310px] h-[500px] bg-yellow-600 rounded-lg z-10">
          <img src={bg} alt="" className='bg-no-repeat h-full rounded-lg'/>
        </div>
      </div>
    </header>
  )
}

export default Profitcal
