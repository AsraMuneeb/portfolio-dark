import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'
import img2 from '../assets/img2.png'
import { useRef } from 'react';
const Home = () => {
  const home = useRef(null)
  const about = useRef(null)
  const skills = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  return (
      <Container fluid className="hero-section text-left">
        <div  className='content'>
          <h1 className="hero-title">I'm <span className='name'>Asra Muneeb</span></h1>
          <p className="hero-subtitle">A Front-End Developer, bringing Your Vision to Life Through Modern Web Development.</p>
          <a href="#projects" className="btn btn-custom">See My Work </a>
        </div>
        <div  className='image'>
        <img src={img2} className='image2' />
        </div>
    </Container>
  )
}

export default Home
