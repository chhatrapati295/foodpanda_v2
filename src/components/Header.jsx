import React from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../services/useOnlineStatus'

const Header = () => {
  const onlineStatus = useOnlineStatus()
  // if(onlineStatus === true){
  //   return <div style={{width : '20px' , height : '20px' , borderRadius : '50%' , backgroundColor : 'greenyellow'}}></div>
  // }else{
  //   return <div style={{width : '20px' , height : '20px' , borderRadius : '50%' , backgroundColor : 'red'}}></div>
  // }
  return (
    <div className='header'>
      <Link to="/" style={{color : '#fc5c17', fontWeight : 'bold'}}>Hunkbite</Link>
      <ul className="nav_items">
      {<div style={{ backgroundColor : !onlineStatus ? 'red' : 'greenyellow'}}>{!onlineStatus ? 'Offline' : 'Active'}</div>}
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/about">
        <li>About</li>
        </Link>
        <Link to="/contact">
        <li>Contact</li>
        </Link>
        <Link to="/cart">
        <li>Cart</li>
        </Link>
        <Link to="/quickmart">
        <li>Quickmart</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header
