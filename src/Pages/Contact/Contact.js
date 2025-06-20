import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('https://my-portfolio-backend-k3ba.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
  
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert('Error sending message');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };
  

  return (
    <section className="contact-section-new">
      <div className="project-header-sec">
        <h2 className='abouth2'>CONTACT<span>INFO</span></h2>
      </div>
      <div className="contact-container-new">
        <div className="contact-info-new">
          <h2>Get in <span>Touch</span></h2>
          <p>I'm open for collaborations, opportunities, or just a quick chat!</p>
          <div className="info-box">
            <p><strong>Contact :</strong> 7094628611</p>
            <p><strong>Email :</strong> kvallarasu2003@gmail.com</p>
            <p><strong>Location :</strong> Tamil Nadu, India</p>
            <p><strong>LinkedIn :</strong> <Link to="https://www.linkedin.com/in/vallarasu-kasimayan" target="_blank">linkedin.com/in/vallarasu-kasimayan</Link></p>
            <p><strong>GitHub :</strong> <Link to="https://github.com/Vallarasu-KSG" target="_blank">github.com/Vallarasu-KSG</Link></p>
          </div>
        </div>

        <div className="contact-form-new">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required ></textarea>
            <button type="submit">Send</button>
            {submitted && <p className="success-msg">Message sent successfully ✅</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
