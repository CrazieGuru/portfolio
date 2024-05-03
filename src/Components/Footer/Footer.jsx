import React from 'react'
import './Footer.css'
import user from '../../assets/user.svg'

const Footer = () => {
  const current_year = new Date()
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <div className="my-name">Mr. Guru</div>
            <p>“Thank you for choosing us – your trust means everything.” “We’re thrilled to have you with us. Thank you for your business!”</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user} style={{filter:"invert(1)", width:"35px",height:"35px"}} alt="" />
                <input type="emmail" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&#169; {current_year.getFullYear()} Mr.Guru. All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
