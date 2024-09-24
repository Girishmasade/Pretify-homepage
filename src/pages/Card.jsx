import React from 'react'
import '../Style/sidecard.css'

const Card = () => {
  return (
    <header className='talk-to-sales p-10 '>
        <h4 className='talk-to-sales-question'>Are you a large business looking for custom solutions?</h4>
        <a href="#" target='_blank'>
            <button className='btn'>Talk to sales</button>
        </a>
    </header>
  )
}

export default Card
