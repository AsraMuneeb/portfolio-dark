import React, { useState, useEffect } from 'react';
import './Contact.css';
import web1 from '../assets/web1.gif';
import { Container, Row, Col } from 'react-bootstrap';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import linkdin from '../assets/linkdin.png';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import thankyou from '../assets/thankyou.png'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // State to manage fading out

  // Close the thank-you card when clicked anywhere else
  const handleClickOutside = () => {
    setIsHidden(true);
    setTimeout(() => {
      setIsHidden(true); // Trigger fading out and sliding up
      
      // Fully remove the card after the transition completes
      setTimeout(() => {
        setSubmitted(false); // Fully remove thank-you card after fade-out
        setIsHidden(false);  // Reset hidden state for future use
      }, 500); // Wait for slide-out and fade-out to complete (matches CSS transition time)
      
    }, 2000); }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show thank-you card instantly
    setSubmitted(true);

    try {
      const response = await fetch('https://formspree.io/f/xqazvgzy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setError(false);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setIsHidden(true); 
          setTimeout(() => {
            setSubmitted(false); 
            setIsHidden(false);  
          }, 500); 
        }, 5000); 
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    if (submitted) {
      // Add click event listener to the document when thank-you card is shown
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      // Clean up event listener when component unmounts or thank-you card disappears
      document.removeEventListener('click', handleClickOutside);
    };
  }, [submitted]);

  return (
    <Container className='contact-section'>
      <Row className='row-contact'>
        <Col className="col-gif">
          <h1>Get in Touch</h1>
          <p>If you’d like to get in touch, feel free to fill out the form below or reach out 
            to me through email. I’m always excited to discuss new projects, collaboration opportunities, 
            or just chat about frontend development.</p>
          <img src={web1} alt="" className="gif3" />
        </Col>
        <Col className="col-form">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
            {error && <p className="error-message">There was an error sending your message. Please try again.</p>}
          </form>
        </Col>
      </Row>

      {/* Thank You Card Overlay */}
      {submitted && (
  <div className={`thank-you-card ${isHidden ? 'hidden' : 'show'}`}>
    <img src={thankyou} alt="" />
    <p>Your message has been sent successfully. I'll get back to you soon.</p>
  </div>
)}


      <Row className='footer'>
        <div className="info">
          <div className="mail">
            <img src={mail} alt="" />
            <p>asramuneeb7@gmail.com</p>
          </div>
          <div className="phone">
            <img src={phone} alt="" />
            <p>+92-3182468418</p>
          </div>
        </div>
        <div className="logos">
          <img src={insta} alt="" />
          <img src={fb} alt="" />
          <img src={linkdin} alt="" />
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
