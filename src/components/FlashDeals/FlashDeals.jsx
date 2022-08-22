import React from 'react'
import FlashCard from "./FlashCard"
import "./flashcard.css"
import Datas from './flashData'


const FlashDeals = () => {

  return (
    <div className="flash">
        <section className='FlashDeals container'>
        <div className="row-satu">
            <h1>Flash Deals</h1>
        </div>
            <FlashCard Datas={Datas}/>
    </section>
    </div>
  )
}

export default FlashDeals
