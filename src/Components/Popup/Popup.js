import React, { useEffect, useState } from 'react';
import './Popup.css';

import contactIcon from '../../Assets/Popup_Icons/Contact.png';
import whatsappIcon from '../../Assets/Popup_Icons/WhatsApp.png';

const Popup = () => {
  const [show, setShow] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    const hidePopup = localStorage.getItem('hidePopup');
    if (!hidePopup) {
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dontShow) {
      localStorage.setItem('hidePopup', 'true');
    }
    setShow(false);
  };

  const handleCheckboxChange = (e) => {
    setDontShow(e.target.checked);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" tabIndex="-1">
      <div className="popup-box animated-popup">
        <h3>Welcome to Our Website!</h3>
        <p>Stay connected with us through email or WhatsApp.</p>

        <div className="popup-buttons">
          <a href="mailto:kvallarasu2003@gmail.com" className="popup-btn contact">
            <img src={contactIcon} alt="Contact Icon" />
            Contact
          </a>
          <a href="tel:+917094628611" target="_blank" rel="noopener noreferrer" className="popup-btn whatsapp" >
            <img src={whatsappIcon} alt="WhatsApp Icon" /> 
            WhatsApp
          </a>
        </div>

        {/* Don’t show again checkbox */}
        <div className="popup-checkbox">
          <input type="checkbox" id="hidePopup" checked={dontShow} onChange={handleCheckboxChange} />
          <label htmlFor="hidePopup">Don't show again</label>
        </div>

        <button className="popup-close" onClick={handleClose}>×</button>
      </div>
    </div>
  );
};

export default Popup;
