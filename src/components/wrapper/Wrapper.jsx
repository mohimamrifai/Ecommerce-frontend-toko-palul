import React from "react"
import "./style.css"
import {TbTruckDelivery} from "react-icons/tb"
import {AiFillIdcard, AiOutlineFileProtect, AiFillCustomerService} from "react-icons/ai"

const Wrapper = () => {
  const data = [
    {
      cover: <TbTruckDelivery className="CM"/>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <AiFillIdcard className="CM" />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <AiOutlineFileProtect className="CM" />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <AiFillCustomerService className="CM" />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='background'>
      <div className='container grid2'>
            {data.map((val, index) => {
              return (
                <div className='product' key={index}>
                  <div className='icon-circle'>
                  {val.cover}
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.decs}</p>
                </div>
              )
            })}
          </div>
      <div className="container">
        
      </div>
      </section>
    </>
  )
}

export default Wrapper
