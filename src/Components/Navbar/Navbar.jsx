import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({setCategory}) => {
    const[showmenu,setShowmenu]=useState(false)
  return (
    <div className='navbar' >
        
      <div onClick={()=>setCategory('general')} className="nav-logo">
        <h>News</h>
      </div>

      <div className="nav-menu">
        <ul>
            <li onClick={()=>setCategory('technology')} >Technology</li>
            <li onClick={()=>setCategory('science')} >Science</li>
            <li onClick={()=>setCategory('business')}>Business</li>
            <li onClick={()=>setCategory('health')}>Health</li>
            <li onClick={()=>setCategory('sports')}>Sports</li>
            <li onClick={()=>setCategory('entertainment')}>Entertainment</li>
        </ul>
      </div>
      <div onClick={()=>setShowmenu(pre=>!pre)} className="icon">
            <FontAwesomeIcon icon={faBars} />
      </div>   
      {
        showmenu?
        <div className='sidebar'>
            <button onClick={()=>setShowmenu(pre=>!pre)}>x</button>
            <ul className='side-nav'>
                <li onClick={()=>setCategory('technology')} >Technology</li>
                <li onClick={()=>setCategory('science')} >Science</li>
                <li onClick={()=>setCategory('business')}>Business</li>
                <li onClick={()=>setCategory('health')}>Health</li>
                <li onClick={()=>setCategory('sports')}>Sports</li>
                <li onClick={()=>setCategory('entertainment')}>Entertainment</li>
            </ul>
        </div>
        :
        null
      }
    </div>
  )
}

export default Navbar
