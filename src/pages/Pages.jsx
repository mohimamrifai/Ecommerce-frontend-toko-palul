import React from 'react'
import Annocument from '../components/annocument/Annocument'
import BigDiscount from '../components/BigDiscount/BigDiscount'
import FlashDeals from '../components/FlashDeals/FlashDeals'
import Home from "../components/mainpage/Home"
import NewArrival from '../components/NewArrivel/NewArrival'
import Shop from '../components/shop/Shop'
import Topcategory from '../components/top/Topcategory'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = () => {
  return (
    <>
      <Home />
      <FlashDeals />
      <Topcategory />
      <NewArrival />
      <BigDiscount />
      <Shop />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages
