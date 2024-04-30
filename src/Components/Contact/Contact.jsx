import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'
import location from '../../assets/location.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ffe36df5-3691-42e7-bf61-8ed4fa36d37b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Form has been sucessfully submitted")
      event.target.values = ""
      console.log(event)
      event.target[0].value = ""
      event.target[1].value = ""
      event.target[2].value = ""
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officiis nulla laborum praesentium modi pariatur deserunt eligendi sed quod. Voluptas.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img id='icon' src={mail} style={{filter:"invert(1)"}} alt="" /> <p>crazieguru1423@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img id='icon' src={phone} style={{filter:"invert(1)"}} alt="" /> <p>+91 8678963469</p>
                </div>
                <div className="contact-detail">
                    <img id='icon' src={location} style={{filter:"invert(1)"}} alt="" /> <p>Chnnai, Tamil Nadu, India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
