import React from "react"
import "./style.css"

const Annocument = () => {
  // const mystyle = {
  //   width: "30%",
  //   height: "340px",
  //   objectFit: "cover" 
  // }
  // const mystyle1 = {
  //   width: "68%",
  //   height: "340px",
  // }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img-satu'>
            <img src="./images/banner-1.png" width='100%' height='100%' alt="banner"/>
          </div>
          <div className='img-dua'>
            <img src='./images/banner-2.png' width='100%' height='100%' alt="banner"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
