import React from 'react'
import BdCart from './BdCart'
import Ddata from './bgData.js'

const BigDiscount = () => {

  return (
    <section className="background">
        <div className="container na">
        <div className="row-satu-na">
            <h1>Big Discount</h1>
            <button className="btn-more">More</button>
        </div>
        <div className="row-dua-bd">
            <BdCart datas={Ddata} />
        </div>
    </div>
    </section>
  )
}

export default BigDiscount