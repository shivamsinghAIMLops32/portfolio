import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import '../styles/Contact.css';

const Contact = () => {
  const [senderEmail, setSenderEmail] = useState('');  // State for sender's email
  const [message, setMessage] = useState('');  // State for message content
  const [status, setStatus] = useState('');  // State for success or failure message
  const [error, setError] = useState('');  // State for errors (e.g., invalid email or empty message)

  // Function to validate email address
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error and status messages
    setError('');
    setStatus('');

    // Validate the sender's email address
    if (!isValidEmail(senderEmail)) {
      setError('Please enter a valid sender email address.');
      return;
    }

    // Validate message content (ensure it's not empty)
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }

    // Prepare data for EmailJS
    const templateParams = {
      user_email: senderEmail,  // Sender's email
      message: message,         // Message content
    };

    // Send the email using EmailJS
    emailjs
      .send(
        '',  // Replace with your EmailJS Service ID
        '',  // Replace with your EmailJS Template ID
        templateParams,
        '' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setMessage(''); // Clear the message input
          setSenderEmail(''); // Clear sender email input
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      {/* Display an email link to your own email */}
      <p>
        Feel free to reach out to me at{' '}
        <a href="mailto:shivamsinghcse19@gmail.com" className="email-link">
          shivamsinghcse19@gmail.com
        </a>
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        {/* Sender's Email Input */}
        <input
          type="email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          placeholder="Your email"
          required
        />
        {/* Message Input */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {/* Display error or status messages */}
      {error && <p className="error">{error}</p>} {/* Show email or message errors */}
      {status && <p className="status">{status}</p>} {/* Show success/failure */}
    </section>
  );
};

export default Contact;
