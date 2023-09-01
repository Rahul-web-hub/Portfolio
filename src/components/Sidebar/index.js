import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/logo-R.png';
import LogoSubtitle from '../../assets/images/logo-R-sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
          <img src={LogoS} alt="logo"/>
          <h3 className='sub-logo'>Rahul</h3>
          </Link>
         <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
         </nav>
         <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/rahul-singh-3b0951225/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>

                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Rahul-web-hub'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>

                </a>
            </li>
          
         </ul>
    </div>
)

export default Sidebar
