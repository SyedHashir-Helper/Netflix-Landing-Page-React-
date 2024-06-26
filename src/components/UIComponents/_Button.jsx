import React from 'react'
import "../../styles/_Button.css"

const _Button = ({type, width, height, text, color, textcolor }) => {
  return (
        <button 
            type={type}
            style={{
                color: `${textcolor}`, height: `${height}`, width: `${width}`, backgroundColor: `${color}`, borderRadius: "0.3rem", border: "none", padding: "12px 0px", margin: "10px 5px"
            }}>
                {text}
        </button>
  )
}

export default _Button
