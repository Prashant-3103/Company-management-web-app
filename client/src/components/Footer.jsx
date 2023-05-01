import '../components/css/Footer.css'

import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="footer-card">
            <div>
            <a  className='a-link' href="#">FACEBOOK</a>
<a className='a-link' href="#">INSTAGRAM</a>
<a className='a-link' href="#">TWITTER</a>

            </div>


<div>
    <Link className='a-link' to = '/about'>ABOUT US</Link>
    <Link className='a-link' to = '/contact'>CONTACT US</Link>
    <Link className='a-link' to = '/home'>HOME</Link>
    <Link  className='a-link' to = '/services'>SERVICES</Link>
</div>

        </div>

    )
}

export default Footer
