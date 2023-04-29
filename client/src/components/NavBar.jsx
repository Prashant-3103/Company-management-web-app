import '../components/css/Navbar.css'
import {Link} from "react-router-dom"

function NavBar(){
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
      </div>
        </div>
    )
}
export default NavBar
