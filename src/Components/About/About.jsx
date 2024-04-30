import React from 'react'
import './About.css'
import about_img from '../../assets/profile-3.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <div className="about-img"><img src={about_img} alt="" /></div>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit., facere reiciendis architecto dicta laborum? itaque quod aliquid hic maiores, dolorum error!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, placeat! Perspiciatis explicabo quae a corporis atque sit iusto tenetur dolore!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Python Developer</p><hr style={{width:"90%"}}/></div>
                    <div className="about-skill"><p>MySql</p><hr style={{width:"75%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Years of Experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>8+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About
