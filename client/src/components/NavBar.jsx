import React, { useState, useEffect } from 'react';
import '../components/css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function NavBar(props) {
  const[theme,setTheme] = useState("");
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
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {

    const token = localStorage.getItem('token');
    const type=localStorage.getItem('type')

    console.log(token)
    if (token) {
      setIsLoggedIn(true);
      if (type === 'ADMIN') {
        setIsAdmin(true);

      }
    } else {
      setIsLoggedIn(false);
    }
  });

  const handleLogout = () => {
    navigate('/home')
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    setIsLoggedIn(false);
    setIsAdmin(false);
  };
const toggleTheme = ()=>{
if(theme==='dark-theme')
{
  setTheme('light-theme')

}
else{
  setTheme('dark-theme')
}
}
useEffect(()=>{
  document.body.className = theme;
}
)


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
            COMPANIES
          </Link>
        </li>
        <li className='nav_item'>
          <Link className='nav_link' to='/contacts'>
            CONTACT
          </Link>
        </li>
        {isLoggedIn   ? (
         <>
          <li>   <button onClick={handleLogout} className='logout_button'>  LOG OUT  </button></li>

<li>
  {/* <Link to ="/user/services"> <button  className='nav_button'> apply FOR COMPANIES</button></Link> */}

  </li></>


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
                ADD COMPANY
              </Link>
            </li>
            <li className='nav_item'>
              <Link className='nav_link' to='/admin/add'>
                ADD ADMIN
              </Link>
            </li>
          </>
        )}

        {
          !isAdmin && (
            <>
            </>
          )
        }
        {!isLoggedIn && (
          <li>
            <button
              onClick={() => {
                navigate('/admin/login');
              }}
              className='nav_button'
            >
              LOG AS ADMIN or SUBADMIN
            </button>
          </li>
        )}


        {/* <li><button className='nav_button' onClick={()=>toggleTheme()}>Dark mode</button></li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
