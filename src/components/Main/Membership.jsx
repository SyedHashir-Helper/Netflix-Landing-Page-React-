import React from 'react'
import TextField from '../UIComponents/TextField'
import _Button from '../UIComponents/_Button'
import "../../styles/Member.css"
import { Button, Row, Col } from 'antd'

const Membership = () => {
  return (
    <div className='member--section'>
        <div className='member-text'>Ready to watch? Enter your email to create or restart your membership.</div>
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
  )
}

export default Membership
