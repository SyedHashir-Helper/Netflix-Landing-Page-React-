import React from 'react'
import TextField from '../UIComponents/TextField'
import _Button from '../UIComponents/_Button'
import "../../styles/Member.css"

const Membership = () => {
  return (
    <div className='member--section'>
        <div className='member-text'>Ready to watch? Enter your email to create or restart your membership.</div>
        <div className='member-details'>
                <div className='hero-textField'>
                    <TextField/>
                </div>
                &nbsp;
                <_Button 
                    type="submit"
                    textcolor="white"
                    text="Get Started >"
                    width="10.3em"
                    color = "red"
                ></_Button>
        </div>
      </div>
  )
}

export default Membership
