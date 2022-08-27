import React from 'react'

const cateBrands = ({data}) => {
  return (
    <div className="containter-Brands shadow">
        <h2>Brands</h2>
        {data.map((value, index) => {
            return (

                <div className="brans" key={index}>
                <img src={value.cateImg} alt="" />
                    <h4 className="brand" >{value.cateName}</h4>
                </div>
            )
        })}
        <h4 className='btn-view'>View All brands</h4>
    </div>
  )
}

export default cateBrands