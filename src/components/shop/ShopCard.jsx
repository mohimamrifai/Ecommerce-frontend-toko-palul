import React from 'react'
import {AiFillStar, AiOutlinePlus} from "react-icons/ai"
import {FiHeart} from "react-icons/fi"


const ShopCard = ({datas}) => {

    const products = datas.shopItems;
  return (
    <div className="container-content-shop">
        <div className="nav-shop">
            <h2>Products</h2>
            <button className='btn-more'>More</button>
        </div>
        <div className="cards">
            {products.map((data, i) => {
                return (
                    <div className='card' key={i}>
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
                        <h3 className="price">$ {data.price}</h3>
                        <button className='btn-plus-card'>
                            <AiOutlinePlus />
                        </button>
                    </div>
                </div>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShopCard