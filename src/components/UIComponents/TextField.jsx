import React from 'react'
import "../../styles/Textfield.css"

const TextField = () => {
  return (
    <div className='field-text-area'>
        <input type='text'/>
        <label className='text-label'>Email Address</label>
    </div>
  )
}

export default TextField
