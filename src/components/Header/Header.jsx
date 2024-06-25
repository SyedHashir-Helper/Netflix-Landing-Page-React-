import React from 'react'
import {Button} from 'antd'
import logo from "./../../assets/images/Logonetflix.png"
import "../../styles/Header.css"
import bgImg from "../../assets/images/Netflix-Hintergrund-1.webp"
import Hero from '../Main/Hero'

const Header = () => {
  return (
    <div className='header--hero'>
        <div className='header'>
            <div className='header--logo'>
                <img  src={logo} 
                    width={150}
                />
            </div>
            <div className='header--signin'>
                <button className='h-signin-button' type='submit'>
                    Sign in
                </button>
            </div>
        </div>
        <div className='hero'>
            <Hero/>
        </div>

    </div>
  )
}

export default Header
