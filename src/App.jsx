import './index.css'
import facebook from './assets/icons/facebook.svg';
import instagram from "./assets/icons/instagram.svg";
import twitter from "./assets/icons/twitter.svg";
import searchIcon from "./assets/icons/search.svg";
import logo from "./assets/icons/logo.svg";
import phoneIcon from "./assets/icons/phone.svg";
import emailIcon from "./assets/icons/email.svg";

function App() {
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
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact us</li>
              </ul>
              <button>Login</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
