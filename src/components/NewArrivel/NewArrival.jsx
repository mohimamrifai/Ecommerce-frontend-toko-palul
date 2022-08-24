import React from 'react'
import NaCart from './NaCart'
import "./style.css"
import Ndata from "./dataArrival"

const NewArrival = () => {
  return (
    <section className="background">
        <div className="container na">
        <div className="row-satu-na">
            <h1>New Arrival</h1>
            <button className="btn-more">More</button>
        </div>
        <div className="row-dua-na shadow">
            {Ndata.map((data, index) => {
                return (
                    <NaCart data={data} key={index}/>
                )
            })}
        </div>
    </div>
    </section>
  )
}

export default NewArrival