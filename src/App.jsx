import './index.css'
import facebook from './assets/icons/facebook.svg';
import instagram from "./assets/icons/instagram.svg";
import twitter from "./assets/icons/twitter.svg";
import searchIcon from "./assets/icons/search.svg";
import logo from "./assets/icons/logo.svg";
import phoneIcon from "./assets/icons/phone.svg";
import emailIcon from "./assets/icons/email.svg";
import handshake from "./assets/images/handshake.png"
import tick from "./assets/icons/tick.svg";
import clock from "./assets/icons/clock.svg"
import mailIcon from "./assets/icons/mail.svg"
import constructor from "./assets/images/constructor.png"
import workers from "./assets/images/construction-workers.png"

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
                <li><a href="#testimonials">Home</a></li>
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
        <section id="services">
          <h2>Our Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec gravida purus.</p>
          <div className="serviceInfoContainer">
            <div className="serviceInfoBox">
              <img src={tick} alt="tick" />
              <h3>Offer certified Workers</h3>
              <p>We offer you workers who are certified under us</p>
            </div>
            <div className="serviceInfoBox">
              <img src={clock} alt="clock" />
              <h3>Lorem Ipsum vginduk</h3>
              <p>idngu vus si lib gendulek jfbehbjf viverra tortor in</p>
            </div>
          </div>
          <h3>Finding and hiring labour and workers is simple, safe and secure with HandyMen</h3>
          <div className="serviceGuide">
            <div className="stepCircles">
              <h4>1</h4>
              <p>Search a job to see who is available</p>
            </div>
            <div className="stepCircles">
              <h4>2</h4>
              <p>Review profiles and pick the best</p>
            </div>
            <div className="stepCircles">
              <h4>3</h4>
              <p>Set up an online agreement</p>
            </div>
            <div className="stepCircles">
              <h4>4</h4>
              <p>Get the job done and pay easily</p>
            </div>
          </div>
          <div className="cta">
            <img src={workers} alt="Construction workers" />
            <div className="hireWrap">
              <h3>In Need Of Handy Men? Sign Up Now</h3>
              <p>Fringilla non proin nec in in lorem amet eget ac. Mauris.</p>
              <div className="signupContainer">
                <input type="email" placeholder='Email Address' />
                <img src={mailIcon} alt="" />
                <button>SignUp</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
