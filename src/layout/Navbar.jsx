import { NavLink, Outlet } from "react-router-dom";

// Pic Imports
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import mailIcon from "../assets/icons/mail.svg";
import phoneOutline from "../assets/icons/phone-outline.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="topHeader">
          <div className="container">
            <p>Linking Hirers and Labourers</p>
            <ul>
              <li><img src={facebook} alt="Facebook" /></li>
              <li><img src={instagram} alt="Instagram" /></li>
              <li><img src={twitter} alt="Twitter" /></li>
            </ul>
          </div>
        </div>
        <div className="midHeader">
          <div className="container">
            <div className="contactSection">
              <img src={logo} alt="Logo" />
              <div className="contactContainer">
                <img src={phoneIcon} alt="Phone" />
                <div className="contactInfo">
                  <p>Phone Number</p>
                  <p className='lighText'>0801 000 1111</p>
                </div>
              </div>
              <div className="contactContainer">
                <img src={emailIcon} alt="Mail" />
                <div className="contactInfo">
                  <p>Email Us Here</p>
                  <p className='lighText'>example@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="searchContainer">
              <input type="text"/>
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </div>
        <nav className='nav'>
          <div className="container">
            <div className="navContainer">
              <ul className="navbar">
                <li><NavLink>Home</NavLink></li>
                <li><NavLink>Hire Workers</NavLink></li>
                <li><NavLink>My Workers</NavLink></li>
                <li><NavLink>Payments</NavLink></li>
                <li><NavLink>Help & FAQs</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <div className="container">
          <div className="companyInfo">
            <h2>.logo</h2>
            <p className="info">Funding freemium long wagwan tail hypotheses first mover advantage assets ownership</p>
            <div className="socialInfo">
              <img src={mailIcon} alt="Email" />
              <p>agensi@mail.com</p>
            </div>
            <div className="socialInfo">
              <img src={phoneOutline} alt="Phone number" />
              <p>+ 12 3456 7890</p>
            </div>
          </div>
          <div className="faq">
            <div className="info">
              <h2>Services</h2>
              <ul>
                <li><a>Web Hosting</a></li>
                <li><a>Domains</a></li>
                <li><a>Premium Hosting</a></li>
                <li><a>Private Server</a></li>
                <li><a>Email Hosting</a></li>
              </ul>
            </div>
            <div className="info">
              <h2>Support</h2>
              <ul>
                <li><a>Pricing Plan</a></li>
                <li><a>Documentation</a></li>
                <li><a>Guide</a></li>
                <li><a>Tutorial</a></li>
              </ul>
            </div>
            <div className="info">
              <h2>Company</h2>
              <ul>
                <li><a>About</a></li>
                <li><a>Blog</a></li>
                <li><a>Join Us</a></li>
                <li><a>Press</a></li>
                <li><a>Partners</a></li>
              </ul>
            </div>
            <div className="info">
              <h2>Legal</h2>
              <ul>
                <li><a>Claim</a></li>
                <li><a>Privacy</a></li>
                <li><a>Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyRight">Design with love © TanahAirStudio 2020. All right reserved</p>
      </footer>
    </>
  );
}
 
export default Navbar;