import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      reply_to: email,
    };

    // EmailJS Configuration with IDs
    const SERVICE_ID = 'service_rqx9l1s';
    const TEMPLATE_ID = 'template_rf50h8c';
    const USER_ID = 'qOIaBdiUzLYiuHh1x';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Message failed to send. Please try again.');
      });

    setMessage('');
    setEmail('');
    setName('');
  };

  return (
    <div id="contact-form" className="contact-form">
      <h3 className="contact-form-h3">Send me a message!</h3>
      <p className="contact-form-p">
        Got a question, proposal, or just want to say hello? Send a message below :)
      </p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;