import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
// import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useState } from "react";
import validator from 'validator'

const Contact = () => {

  const form = useRef();

  const [emailError, setEmailError] = useState('')

// Email Validating
  const handleChange = (e) => {
    if (validator.isEmail(e.target.value)) {
      console.log("good email")
      setEmailError("")
    } else {
      console.log("bad email")
      setEmailError("Please enter a valid Email")
    }

    console.log("clicked")
    console.log(e.target.value)

  };
// Send Message to inbox
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9ensf9', 'template_n3q79rj', form.current, 'user_9chTaQ2GjZl9I59a8')

    e.target.reset()
  };

  return (
    <section id='contact'>
      {/* <h5>Contact Us</h5> */}
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>stella.ling@outlook.com</h5>
            <a href="mailto:stella.ling@outlook.com" target="_blank" rel="noopener noreferrer" >Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Stella Ling</h5>
            <a href="https://m.me/Ste112/" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          {/* <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+61423504059</h5>
            <a href="https://api.whatsapp.com/send?phone=+61*********" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article> */}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' onChange={handleChange} required />
          <p>{emailError}</p>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

// import { Button, CardTitle, CardImg, CardBody, CardSubtitle, CardText } from 'reactstrap';

// const Contact = (props) => {
//     return (
//         <div class="card-deck">
//             <div class="flex-row">
//                 <div class="row card-contact px-2 py-2">
//                     <CardImg top width="30%" src="/images/stella.jpg" alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle tag="h5">Stella Ling</CardTitle>
//                         <CardSubtitle tag="h6" className="mb-2 text-muted">Resort Director</CardSubtitle>
//                         <CardText>Stella oversees the ski resort.  Every decision, question, or assignment is either designed or approved by her.  Ker is the brain and heart behind this fantastic ski resort with over 200  luxurious rooms and over hundreds of ski equipments.</CardText>
//                         <Button href="https://github.com/stellalph">Contact Stella</Button>
//                     </CardBody>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Contact;