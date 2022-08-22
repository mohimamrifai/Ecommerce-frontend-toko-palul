import React from 'react'
import { Link } from 'react-router-dom'
import {FiAlignJustify, FiChevronDown} from "react-icons/fi"


const Navbar = () => {
  return (
    <section className='navbar container'>
        <div className="categoris">
            <FiAlignJustify className='CM'/>
            <h4>Categoris <FiChevronDown /></h4>
        </div>
            <ul className="navlink">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pages">Pages</Link>
                </li>
                <li>
                    <Link to="/pages">User account</Link>
                </li>
                <li>
                    <Link to="/pages">Vendor Account</Link>
                </li>
                <li>
                    <Link to="/pages">Track My Order</Link>
                </li>
                <li>
                    <Link to="/pages">Contact</Link>
                </li>
            </ul>

            <button className='btn'>
                <FiAlignJustify className="btn-menu"/>
            </button>
    </section>
  )
}

export default Navbar
