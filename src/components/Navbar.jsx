import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import {AiFillCaretDown} from 'react-icons/ai'
// import {AiFillCaretDown} from react-icons/AiFillCaretDown
import { icons } from 'react-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src='https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/343385154_1218768375670431_4262479598097046461_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oCzr1rCak6AAX8WMFEP&_nc_ht=scontent.fuln2-2.fna&oh=03_AdRTK9MoPdEwrXGGu1SbT4sILrMXJaKtj4dt8aM8e_-ijg&oe=647026B5'></img>
         
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Систем шийдэл
              
            </Link>
            {dropdown && <Dropdown />}
          </li>
          
          <li className='nav-item'>
            <Link
              to='/Туршлага'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Туршлага
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Контент'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Контент
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/Бид-хэн-бэ'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Бид хэн бэ?
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu  }
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
