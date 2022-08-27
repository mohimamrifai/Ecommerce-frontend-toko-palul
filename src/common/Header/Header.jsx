import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Head from './Head'
import "./header.css"

const Header = ({cartItem}) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItem}/>
      <Navbar />
    </>
  )
}

export default Header
