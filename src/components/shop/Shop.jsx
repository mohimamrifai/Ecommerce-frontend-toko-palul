import React from 'react'
import CateBrands from "./CateBrands"
import ShopCard from './ShopCard'
import "./style.css"
import Bdata from './BrandData'

const Shop = ({shopItems, addToCart}) => {
  return (
    <section className="shop background">
        <div className="container ">
            <div className="shop-main">
                <CateBrands data={Bdata} />
                <ShopCard shopItems={shopItems} addToCart={addToCart}/>
            </div>
        </div>
    </section>
  )
}

export default Shop