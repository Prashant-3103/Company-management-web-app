import React, {useState, useEffect} from 'react'
import '../components/css/Navbar.css'
import {Link, navigate, useNavigate} from "react-router-dom"

function NavBar(props){

const[active, setActive] = useState("nav_menu")

const[toggleIcon ,setToggleIcon] = useState("nav_toggler")
const navToggler =() =>{
    active === 'nav_menu' ? setActive('nav_menu nav_active')
    : setActive('nav_menu')

//togglericon

toggleIcon ==="nav_toggler"
? setToggleIcon("nav_toggler toggle ")
: setToggleIcon("nav_toggler")

}

const navigate = useNavigate()


const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
}, []);

const handleLogout = () => {
  localStorage.removeItem("token");
  setIsLoggedIn(false);
};


    return(
       <nav className="nav">

     <h1 className='nav_brand'>University placement cell</h1>

        <ul className={active}>
            <li className="nav_item"> <Link className='nav_link' to ="/home">HOME</Link> </li>
            <li className="nav_item"><Link className='nav_link' to ="/about">ABOUT</Link></li>
            <li className="nav_item"><Link className='nav_link' to ="/services">SERVICES</Link></li>
            <li className="nav_item">  <Link className='nav_link' to ="/contacts">CONTACT</Link></li>

<li>  <button
      onClick={()=>{
        navigate('/user/login');
      }}
      className='nav_button'
    >LOG AS user</button></li>


{
    localStorage.getItem('token') &&
   <li className="nav_item"><Link className='nav_link' to ="/admin/services">Add services</Link></li>
}
{
    localStorage.getItem('token') && localStorage.getItem('type') === 'ADMIN' &&
  <li className="nav_item"><Link className='nav_link' to ="/admin/list">LIST OF ADMINS</Link></li>
}





{


    localStorage.getItem('token') ?
    <button
      onClick={()=>{
        localStorage.clear();
        navigate('/admin/dashboard');
      }}
      className='nav_button logout_button'
    >LOG OUT</button> :
    <button
      onClick={()=>{
        
        navigate('/admin/login');
      }}
      className='nav_button'
    >LOG AS ADMIN/SUBADMIN</button>

}



</ul>

<div onClick={navToggler} className={toggleIcon}>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
</div>

      </nav>
    )
}
export default NavBar
