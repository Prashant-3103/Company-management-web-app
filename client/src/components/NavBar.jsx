import React, { useState, useEffect } from 'react';
import '../components/css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function NavBar(props) {
  const [active, setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');
  const navigate = useNavigate();

  const navToggler = () => {
    setActive(active === 'nav_menu' ? 'nav_menu nav_active' : 'nav_menu');

    // toggler icon
    setToggleIcon(
      toggleIcon === 'nav_toggler' ? 'nav_toggler toggle ' : 'nav_toggler'
    );
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      if (localStorage.getItem('type') === 'ADMIN') {
        setIsAdmin(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <nav className='nav'>
      <h1 className='nav_brand'>University placement cell</h1>
      <div onClick={navToggler} className={toggleIcon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
      <ul className={active}>
        <li className='nav_item'>
          <Link className='nav_link' to='/home'>
            HOME
          </Link>{' '}
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to='/about'>
            ABOUT
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to='/services'>
            SERVICES
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to='/contacts'>
            CONTACT
          </Link>
        </li>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout} className='nav_button'>
              LOG OUT
            </button>
          </li>
        ) : (
          <li>
            <button
              onClick={() => {
                navigate('/user/login');
              }}
              className='nav_button'
            >
              LOG AS USER
            </button>
          </li>
        )}
        {isAdmin && (
          <>
            <li className='nav_item'>
              <Link className='nav_link' to='/admin/services'>
                ADD SERVICES
              </Link>
            </li>
            <li className='nav_item'>
              <Link className='nav_link' to='/admin/add-admin'>
                ADD ADMIN
              </Link>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <button
              onClick={() => {
                navigate('/admin/login');
              }}
              className='nav_button'
            >
              LOG AS ADMIN/SUBADMIN
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
