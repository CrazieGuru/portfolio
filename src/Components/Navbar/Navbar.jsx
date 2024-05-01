import React, { useState,useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu-open.svg'
import menu_close from '../../assets/menu-close.svg'

const Navbar = () => {
  
  const [menu,setMenu] = useState('home');
  const menuRef = useRef()

  const openMenu = ()=>{
    menuRef.current.style.right = "0"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>
        <p className="my-name">Mr. <span>Guru</span></p>
        <img src={menu_open} onClick={openMenu} id='icon' className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} id='icon' className='nav-mob-close'/>
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
