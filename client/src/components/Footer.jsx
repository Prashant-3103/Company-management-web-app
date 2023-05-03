import '../components/css/Footer.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faCircleInfo, faHeart,faLink } from '@fortawesome/free-solid-svg-icons';



function Footer(){
    return(

        <footer>
        <div className="row">
          <div className="col">
            {/* <img src=".../src/assets/logo.png" alt="" srcset="" className="logo" /> */}
            <p>
            This webpage serves as a platform for students to apply to companies and for admins to add new companies to the database. Students can create a profile and submit their applications to multiple companies with ease. Admins can manage the list of companies and their information, making it easy for students to find and apply to relevant opportunities. The webpage is designed to simplify the recruitment process for both students and companies.
            </p>
          </div>
          <div className="col">
            <h3>
              <FontAwesomeIcon icon={faLocationDot} className="faloc" />
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>National Institute Of Technology Karnataka Surathkal</p>
            <p>NH 66, Srinivasnagar, Surathkal, Manglore, Karnataka 575025</p>

            <h4>
              <FontAwesomeIcon icon={faPhone} className="faloc" /> +91 9902921511
            </h4>
          </div>
          <div className="col">
            <h3>
              <FontAwesomeIcon icon={faCircleInfo} className="faloc" />
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="/home">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT </a>
              </li>

              <li>
                <a href="/contacts">CONTACTS</a>
              </li>
            </ul>
          </div>

        </div>
        <hr />
        <p className="last">
         Wish you all the best ❤️
        </p>
      </footer>


    )
}

export default Footer
