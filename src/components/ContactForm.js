import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, left empty to fill in later
    console.log('Message:', message);
    // Clears the form after submission
    setMessage('');
  };

  return (
    <div className="contact-form">
      <h3 className="contact-form-h3">Send me a message!</h3>
      <p>Got a question, proposal or just want to say hello? Send a message below :)</p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" />
        </FormGroup>
        <Button>Message</Button>
      </Form>
    </div>
  );
};

export default ContactForm;