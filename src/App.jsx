import { useState, useEffect} from 'react'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Contact from './components/Contact'
import frm2 from './assets/frm2.png'
import frm1 from './assets/frm1.png'


function App() {

  const [activeSection, setActiveSection] = useState('home'); // Track the active section

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5, // 50% of the section needs to be visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
    <div className='app'>
      {/* <img src={frm2} className='frm2' alt="" /> */}
      <img src={frm1} className='frm1' alt="" />
      <img src={frm1} className='frm11' alt="" />
      <img src={frm2} className='frm2' alt="" />

        <NavBar activeSection={activeSection}></NavBar>
      <section className='home' id='home'>
      <Home></Home>
      </section>
      <section className="about" id='about'>
      <About></About>
      </section>
      <section className="tools" id='tools'>
        <Tools></Tools>
      </section>
      <section className="projects" id='projects'>
        <Projects></Projects>
      </section>
      <section className="contact" id='contact'>
        <Contact></Contact>
      </section>
      </div>
  )
};

export default App;
