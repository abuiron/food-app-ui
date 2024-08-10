import React, { useState } from 'react';
import '../styles/FormSection.css';

function FormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="form-section">
      <h2>Join the Waitlist</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="waitlist-form">
          <div className='waitlist-form-in'>
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="City" required />
          </div>
          <button type="submit" className="form-btn">Join the Waitlist</button>
          <button className='form-btn-container'></button>
        </form>
      ) : (
        <h2 className="thank-you">Thank You!</h2>
      )}
    </section>
  );
}

export default FormSection;
