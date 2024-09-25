
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logoBoot from '../assets/logo-boot.png';
import logoCss from '../assets/logo-css.png';
import logoHtml from '../assets/logo-html.gif';
import logoJs from '../assets/logo-js.png';
import logoPython from '../assets/logo-python.gif';
import logoReact from '../assets/logo-react.png';
import logoSql from '../assets/logo-sql.png';
import pc1 from '../assets/pc1.png';
import wind from '../assets/wind.png';
import Bar from './Bar.jsx'
import circle1 from '../assets/circle1.png';
import sqr from '../assets/sqr2.png';
import cross2 from '../assets/double.png';
import circle2 from '../assets/clines.png';

import './Tools.css'

const Tools = () => {
  return (
      <Container className='main'>
        <img src={circle1} className='circle1' alt="" />
        <img src={sqr} className='sqr' alt="" />
        <img src={cross2} className='cross2' alt="" />
        <img src={circle2} className='circle2' alt="" />
        <Row className='title'><h1>Technical <br />Skills</h1></Row>
        <Row className='row1'>
          <Col className='col2'>
            <Bar strImage={logoHtml} skillName='HTML' prog={70}></Bar>
            <Bar strImage={logoCss} skillName='CSS' prog={70}></Bar>
            <Bar strImage={logoJs} skillName='javaScript' prog={70}></Bar>
            <Bar strImage={logoReact} skillName='React' prog={60}></Bar>
            <Bar strImage={logoBoot} skillName='Bootstrap' prog={50}></Bar>
            <Bar strImage={logoPython} skillName='Python' prog={80}></Bar>
            <Bar strImage={logoSql} skillName='SQL' prog={70}></Bar>
            <Bar strImage={logoSql} skillName='Figma' prog={50}></Bar>
          </Col>
          <Col className='col1'> 
          <div className="frame1"></div>
          <img src={pc1} className='pc' alt="" />
          <div className="image3"><img src={wind} className='wind' alt="" /></div>
          </Col>
        </Row>
      </Container>

  )
}

export default Tools
