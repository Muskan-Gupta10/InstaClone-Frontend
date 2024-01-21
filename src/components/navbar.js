import React from 'react'
import camera from "./images/camera.png"
import logo from "./images/logoicone.png"
import "./navbar.css"
import { GrTarget } from "react-icons/gr";
import { BsCamera } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navheading'>
          <GrTarget id='logo'/>
           {/* <img height="50px" src={logo} alt="" /> */}
           <NavLink to='/allpost'> <h1 id='h1'>InstaShare</h1></NavLink> 
        </div>
        <div className='postimg'>
          <NavLink to="/addpost">  {/*<img  height="40px" src={camera}  alt="" />*/}<BsCamera id='camera'/></NavLink> 
       
        </div>
      
        </div>
      

  )
}

export default Navbar
