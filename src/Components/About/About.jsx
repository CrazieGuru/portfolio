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
                    <p>Experianced in Python language in IT Industry, Profi cient in developing web 
                        applications using Python frameworks such as Django. Skilled in front-end 
                        development with expertise in HTML, CSS, and JavaScript. Experienced in 
                        database management systems including MySQL and SQLite. Adept at problem-solving and 
                        debugging, with a strong understanding of software development lifecycle. 
                        Passionate about learning new technologies and staying updated with industry trends 
                        to drive continuous improvement in software development practices.</p>
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
