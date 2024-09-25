import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap';
import web from '../assets/web.gif'
import arrow1 from '../assets/arrow.png'
import cross from '../assets/cross.png'
import sqr1 from '../assets/sqr1.png'
import circle from '../assets/scircle.png'
import waves1 from '../assets/waves1.png'

import profile3 from '../assets/profile3.jpg'




const About = () => {
  return (
    <Container id="about" className="about-section py-5">
      <img src={arrow1} className='prop1' alt="" />
      <img src={circle} className='prop3' alt="" />
      <img src={sqr1} className='prop4' alt="" />
      <img src={cross} className='prop2' alt="" />
      <img src={waves1} className='prop5' alt="" />
      <img className='web' src={web} alt=""/>
      <Row className='row-about'>
      <h2>About <br />Me</h2> 
      <Col className='vid' >
          {/* <video src={profile} loop autoPlay muted></video> */}
            <img src={profile3} alt="" />
            <div className="frame"></div>
        </Col>
        <Col className='about-content'>
          <p>
            I am a passionate web developer skilled in both front-end and back-end technologies.
            My expertise lies in creating immersive digital experiences that seamlessly merge creativity with functionality.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
