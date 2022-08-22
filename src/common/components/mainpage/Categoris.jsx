import React from 'react'
import data from './categorisData'
import "./home.css"

const Categoris = () => {

  return (
    <>
      <div className="list-categoris">
        {
            data.map((value, index) => {
                return (
                    <div className="box" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Categoris
