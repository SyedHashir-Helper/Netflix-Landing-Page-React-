import React from 'react'
import "../../styles/Footer.css"
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import {Col, Row} from "antd"
import HorizontalLine from '../UIComponents/HorizontalLine';


const Footer = () => {
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      };
    const items = [
        {
          label: 'English',
          key: '1',
          icon: <UserOutlined />,
        }
      ];
      const menuProps = {
        items,
        onClick: handleMenuClick,
      };

    const list = [
        "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
    ]
  return (
    <div className='footer--section'>
        <div className='container'>
            <Col className='footer-item' md={24}>
                <a>Question? Contact Us</a>
            </Col>

            <Row>
                {
                    list.map((element, index)=>{
                        return (
                            <Col className='footer-item' md={6} key={index}>
                                <a>{element}</a>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row>
                <Col className='footer-item'>
                    <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
                        English
                    </Dropdown.Button>
                </Col>
            </Row>
            <Row>
                <Col className='footer-item' md={6}>Netflix Pakistan</Col>
            </Row>
        </div>
        <HorizontalLine/>
        <Row style={{
            paddingTop: "1.7em"
        }}>
            <Col md={24} className='footer-developer'>
                Non-Responsive Version 1.0 Developed By Syed Hashir Husnain in React JS
            </Col>
        </Row>
    </div>
  )
}

export default Footer
