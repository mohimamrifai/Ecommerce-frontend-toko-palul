import React from 'react'
import CateBrands from "./CateBrands"
import ShopCard from './ShopCard'
import "./style.css"
import Bdata from './BrandData'
import Sdata from './sData'

const Shop = () => {
  return (
    <section className="shop background">
        <div className="container ">
            <div className="shop-main">
                <CateBrands data={Bdata} />
                <ShopCard datas={Sdata}/>
            </div>
        </div>
    </section>
  )
}

export default Shop