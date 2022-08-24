import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./style.css"

const BdCart = ({datas}) => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
      }
  return (
    <>
        <Slider {...settings}>
            {datas.map((data, index) => {
                return (
                        <div key={index} >
                            <div className="box-bd">
                            <div >
                            <img src={data.cover} alt=""/>
                            </div>
                            <h4>{data.name}</h4>
                            <span>$ {data.price}</span>
                        </div>
                    </div>
                )
            })}
        </Slider>
        
    </>
  )
}

export default BdCart