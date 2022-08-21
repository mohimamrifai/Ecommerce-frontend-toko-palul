import React from 'react'
import {BiSearchAlt, BiUser, BiCart} from "react-icons/bi"

const Search = () => {
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
                <div className='logo-cart'>
                <BiCart />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search
