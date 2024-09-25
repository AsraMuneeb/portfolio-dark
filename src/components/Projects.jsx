import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css'
import circle4 from '../assets/fcircle.png'
import circle from '../assets/single.png'
import cross3 from '../assets/cross3.png'
import square from '../assets/sqr1.png'
import invent from '../assets/inventory.mp4'
import logistics from '../assets/logistics.mp4'
import tic from '../assets/tic.mp4'
import clone from '../assets/clone.mp4'
import pc from '../assets/pc.gif'

const Projects = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            { threshold: 0.1 } 
        );

       
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            observer.observe(card);
        });
        
        return () => observer.disconnect();
    }, []);
    return (
        <Container className='proj'>
            <img src={circle4} className='circle4' alt="" />
            <img src={circle} className='circle'alt="" />
            <img src={cross3} className='cross3'alt="" />
            <img src={square} className='square'alt="" />
            <Row className='proj-row'> 
            <Row className='h1-title'>
           
     <h1>Projects</h1>
     {/* <video src={web} autoPlay loop muted></video> */}
     {/* <img src={pc} alt="" /> */}
     </Row>

     <div className="card" id='card1'>
        <video src={logistics} loop autoPlay muted></video>
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h2 className="card__title">Logistics Management</h2>            
          </div>
        </div>
        <div className="card__description">
        <p>Created a responsive UI and built an admin dashboard using HTML, CSS, and Bootstrap, seamlessly integrating with Django and SQLite.</p>
        </div>
      </div>
    </div>   

    <div className="card" id='card2'>
    <video src={invent} loop autoPlay muted></video>
    <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h2 className="card__title">Inventory Management</h2>            
          </div>
        </div>
        <div className="card__description">
        <p>Designed and developed the dashboard using PHP, JavaScript, HTML, CSS, and Bootstrap for seamless inventory tracking and management.</p>
        </div>
      </div>
    </div>  
    <div className="card" id='card3'>
    <video src={clone} loop autoPlay muted></video>
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h2 className="card__title">Netflix Clone</h2>            
          </div>
        </div>
        <div className="card__description">
        <p>Developed a Netflix clone using React.js, HTML, and CSS to
                        replicate the streaming platform's user interface and
                        functionality.</p>
        </div>
      </div>
    </div>  

    <div className="card" id='card4'>
    <video src={tic} loop autoPlay muted></video>
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h2 className="card__title">Tic-Tac-Toe</h2>            
          </div>
        </div>
        <div className="card__description">
        <p>A classic Tic-Tac-Toe game built using JavaScript, React, HTML, and CSS, featuring a clean UI with responsive interactions and dynamic game logic to track player moves and declare the winner.</p>
        </div>
      </div>
    </div>  

            </Row>

        </Container>

    )
}

export default Projects
