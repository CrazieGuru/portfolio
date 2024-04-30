import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  

  const [menu,setMenu] = useState('home');
  return (
    <div className='navbar'>
        <p className="my-name">Mr. <span>Guru</span></p>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' href='#home'><p className={menu==="home"?"active":""} onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p className={menu==="about"?"active":""} onClick={()=>setMenu("about")}>About me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p className={menu==="services"?"active":""} onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p className={menu==="portfolio"?"active":""} onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p className={menu==="contact"?"active":""} onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>

    </div>
  )
}

export default Navbar
