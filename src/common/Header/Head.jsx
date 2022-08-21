import React from 'react'
import {FiPhone} from "react-icons/fi"
import {AiOutlineMail} from "react-icons/ai"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className="container d-flex">
          <div className='left Row'>
            <i><FiPhone /></i>
            <label>+88012 3456 7894</label> 
            <i><AiOutlineMail /></i>
            <label>support@ui-lib.com</label> 
          </div>
          <div className='left Row'>
          <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
