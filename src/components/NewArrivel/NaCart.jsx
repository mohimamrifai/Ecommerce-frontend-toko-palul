import React from 'react'

const NaCart = ({data}) => {
  return (
    <div className="box-na">
        <div className="img-na">
        <img src={data.cover} alt=""/>
        </div>
        <h4>{data.name}</h4>
        <span>$ {data.price}</span>
    </div>
  )
}

export default NaCart