import React from 'react'
import { cards } from '../utils/cards'

const Heroslider = () => {
  return (
    <header className='bg-gray-300'>
    <div className='flex justify-evenly relative bottom-10 ml-20 right-1 space-y-2'>
      <div className="grid sm:grid-cols-3">
        {
            cards.map((index) => (
                <div key={index.id} className="ml-20 mr-20 space-y-2">
                    <img src={index.img} className='w-20 bg-white rounded-3xl p-2'/>
                    <h3 className='text-xl font-bold text-green-500'>{index.title}</h3>
                    <h3 className='text-xl font-bold'>{index.head}</h3>
                    <p>{index.desc}</p>
                </div>
            ))
        }
      </div>
    </div>
    </header>
  )
}

export default Heroslider
