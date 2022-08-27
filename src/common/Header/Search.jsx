import React from 'react'
import {BiSearchAlt, BiUser, BiCart} from "react-icons/bi"
import { Link } from 'react-router-dom'

const Search = ({cartItem}) => {


    window.addEventListener("scroll", () => {

        const Search = document.querySelector(".search")

        Search.classList.toggle("active", window.scrollY > 100)

    })



  return (
    <section className='search'>
        <div className="container wrapper">
            <div className="logo">
                <h1>TOKO PALUL</h1>
            </div>
            <div className='search-box'>
                <BiSearchAlt className='icon-search'/>
                <input type="text" placeholder="Cari..."/>
                <span>All Category</span>
            </div>
            <div className='logo-UC'>
                <div className='logo-user'>
                <BiUser/>
                </div>
                <Link className='logo-cart' to='/cart' data-qty={cartItem.length}>
                    <BiCart />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Search
