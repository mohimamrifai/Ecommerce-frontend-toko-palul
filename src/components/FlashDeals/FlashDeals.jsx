import React from 'react'
import FlashCard from "./FlashCard"
import "./flashcard.css"


const FlashDeals = ({productItems, addToCart}) => {


  return (
    <div className="flash">
        <section className='FlashDeals container'>
        <div className="row-satu">
            <h1>Flash Deals</h1>
        </div>
            <FlashCard productItems={productItems} addToCart={addToCart}/>
    </section>
    </div>
  )
}

export default FlashDeals
