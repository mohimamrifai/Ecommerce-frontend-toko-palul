import React from 'react'
import Topcart from './Topcart'
import "./topcategory.css"

const Topcategory = () => {
  return (
    <section className="category">
        <div className="container">
            <div className="row-satu-category">
                <h1>Top Category</h1>
            </div>
            <div className="row-dua-category">
                <Topcart />
            </div>
        </div>
    </section>
  )
}

export default Topcategory