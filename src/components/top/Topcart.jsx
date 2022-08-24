import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Tdata from "./Tdata"

const Topcart = () => {



    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
        <Slider {...settings}>
            {Tdata.map((data, index) => {
                return (
                    <div key={index}>
                    <div className="box-top shadow" >
                        <div className="box-top-navbar">
                            <span className="tleft">{data.para}</span>
                            <span className="tright">{data.desc}</span>
                        </div>
                        <div className='box-content'>
                            <img src={data.cover} alt="" />
                        </div>
                    </div>
                    </div>
                )
            })}
        </Slider>
        
    </>
  )
}

export default Topcart