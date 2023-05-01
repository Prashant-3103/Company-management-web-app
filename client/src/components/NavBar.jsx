import '../components/css/Navbar.css'
import {Link, Navigate, useNavigate} from "react-router-dom"

function NavBar(){
    const navigate = useNavigate()
    return(
        <div className='parent-div'>

       <div>
        UNIVERSITY PLACEMENT PORTAL
       </div>
      <div className="flex">
<div className='pl-5'><Link className='link' to ="/home">Home</Link></div>
<div className='pl-5'><Link className='link' to ="/about">About</Link></div>
<div className='pl-5'><Link className='link' to ="/services">Services</Link></div>
<div className='pl-5'><Link className='link' to ="/contacts">Contact</Link></div>
{
    localStorage.getItem('token') &&
    <div className='pl-5'><Link className='link' to ="/admin/services">Add services</Link></div>
}
{
    localStorage.getItem('token') && localStorage.getItem('type') === 'ADMIN' &&
    <div className='pl-5'><Link className='link' to ="/admin/list">LIST OF ADMINS</Link></div>
}



{
    localStorage.getItem('token') ?
    <button onClick={()=>{
        localStorage.clear()
        navigate('/admin/dashboard')
    }}> LOG OUT</button> :
    <button onClick={()=>{
        navigate('/admin/login')
    }}>LOG IN</button>
}

      </div>
        </div>
    )
}
export default NavBar
