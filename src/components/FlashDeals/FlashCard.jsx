import React from 'react'
import {FiHeart, FiArrowRight, FiArrowLeft} from "react-icons/fi"
import {AiFillStar, AiOutlinePlus} from "react-icons/ai"
import Slider from "react-slick"
import "./flashcard.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FlashCard = ({Datas}) => {


    const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <FiArrowRight />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <FiArrowLeft />
      </button>
    </div>
  )
}


    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {Datas.map((data, index) => {
          return (
            <div className='card' key={index}>
                <div className="boxcard">
                    <div className="navCard">
                        <span className="diskonCard">{data.discount}% off</span>
                        <FiHeart />
                    </div>
                    <div className="imgCard">
                        <img src={data.cover} alt="" />
                    </div>
                    <h4 className="titleCard">{data.name}</h4>
                    <div className="ratingCard">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div className="footerCard">
                        <h3 className="price">${data.price}</h3>
                        <button className='btn-plus-card'>
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
  
}

export default FlashCard

