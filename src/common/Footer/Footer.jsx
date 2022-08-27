import React from 'react'
import {FaGooglePlay} from "react-icons/fa"
import {DiAppstore} from "react-icons/di"
import "./style.css"

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="container bf_section">
                <div className="bf">
                    <h1>Toko palul</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                    <div className="bf_icon">
                    <FaGooglePlay className="playstore"/>
                    <span>Playstore</span>
                    </div>
                    <div className="bf_icon">

                    <DiAppstore className='appstore'/>
                    <span>App store</span>
                    </div>
                </div>
                <div className="bf">
                    <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>
                <div className="bf">
                    <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center </li>
                            <li>How to Buy </li>
                            <li>Track Your Order </li>
                            <li>Corporate & Bulk Purchasing </li>
                            <li>Returns & Refunds </li>
                        </ul>
                </div>
                <div className="bf">
                <h2>Contact Us</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer