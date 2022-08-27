import React from 'react'
import Categoris from './Categoris'
import Slider from './Slider'


const home = () => {
  return (
    <div className="home">
        <section className="container d-flex home-main">
        <Categoris />
        <Slider />
        </section>
    </div>
  )
}

export default home
