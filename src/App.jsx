import './index.css'
import facebook from './assets/icons/facebook.svg';
import instagram from "./assets/icons/instagram.svg";
import twitter from "./assets/icons/twitter.svg";
import searchIcon from "./assets/icons/search.svg";
import logo from "./assets/icons/logo.svg";
import phoneIcon from "./assets/icons/phone.svg";
import emailIcon from "./assets/icons/email.svg";
import handshake from "./assets/images/handshake.png"
import constructor from "./assets/images/constructor.png"

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
                <li><a href="#aboutUs">Home</a></li>
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
      <main>
        <section id="home">
          <div className="sectionHead">
            <h1>Linking Hirers and Labourers </h1>
            <p className='h2'>Both Unskilled and Semi-skilled labourers</p>
            <p className='h3'>Workers you can trust, work you can rely on</p>
          </div>
          <button>Sign Up</button>
        </section>
        <section id="aboutUs">
          <h2>ABOUT US</h2>
          <div className="aboutBox">
            <img src={handshake} alt="A happy deal" />
            <div className="aboutDetails">
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sed porttitor velit maecenas congue hendrerit nulla ac tortor ullamcorper. Bibendum convallis eu vel nisl orci vitae eget. Egestas suscipit aenean sit metus risus mauris ornare. Pulvinar congue malesuada sapien convallis. Nunc sed volutpat viverra tortor in. A egestas aenean orci sed </p>
            </div>
          </div>
          <div className="aboutBox">
            <img src={constructor} alt="Constructor worker" />
            <div className="aboutDetails">
              <h3>Lorem Ipsum</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Sed porttitor velit maecenas congue hendrerit nulla ac tortor ullamcorper. Bibendum convallis eu vel nisl orci vitae eget. Egestas suscipit aenean sit metus risus mauris ornare. Pulvinar congue malesuada sapien convallis. Nunc sed volutpat viverra tortor in. A egestas aenean orci sed </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
