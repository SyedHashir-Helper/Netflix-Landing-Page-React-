
import React from 'react'
import "../../styles/BlackSection.css"
import { Row, Col } from 'antd'

const BlackSection = ({bigText, smallText, img, reverse}) => {
  return (
    <section >
        <Row className='black--section' style={{flexDirection: `${reverse ? "row-reverse" : ""}`}}>
            <Col md={12} xs={24}  className='black--text'>
                <div className='black--text-big'>
                    {bigText}
                </div>
                <div className='black--text-small'>
                    {smallText}
                </div>
            </Col>
            <Col md={12} xs={24}  className='black--img'>
                <img src={img}/>
            </Col>
        </Row>
        {/* <div className='black--text'>
            <div className='black--text-big'>
                {bigText}
            </div>
            <div className='black--text-small'>
                {smallText}
            </div>
        </div>
        <div className='black--image'>
            <img src={img}/>
        </div> */}
    </section>
  )
}

export default BlackSection
