
import React from 'react'
import "../../styles/BlackSection.css"

const BlackSection = ({bigText, smallText, img, reverse}) => {
  return (
    <section className='black--section' style={{flexDirection: `${reverse ? "row-reverse" : ""}`}}>
        <div className='black--text'>
            <div className='black--text-big'>
                {bigText}
            </div>
            <div className='black--text-small'>
                {smallText}
            </div>
        </div>
        <div className='black--image'>
            <img src={img}/>
        </div>
    </section>
  )
}

export default BlackSection
