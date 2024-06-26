import React from 'react'
import "../../styles/Hero.css"
import { Button, Row, Col } from 'antd'

import TextField from "../UIComponents/TextField"
import _Button from "../UIComponents/_Button.jsx"
const Hero = () => {
  return (
    <>
        <div className='hero-section'>
            <h1 className='hero-text-1'>
                Unlimited movies, TV shows, and more
            </h1>
            <p className='hero-text-2'>
                Watch anywhere. Cancel anytime.
            </p>
            <p className='hero-text-3'>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {/* <div className='hero-input-button'>
                <div className='hero-textField'>
                    <TextField/>
                </div>
                <_Button 
                    type="submit"
                    textcolor="white"
                    text="Get Started >"
                    width="10em"
                    color = "red"
                ></_Button>
            </div> */}
            <Row className='hero-input-button'>
                <Col className='hero-textField' md={10} xs={24}>
                    <TextField/>
                </Col>
                <Col md={4} xs={12}>
                    <_Button 
                        type="submit"
                        textcolor="white"
                        text="Get Started >"
                        width="10em"
                        color = "red"
                    ></_Button>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Hero
