import facebook from '../../assets/icons/facebook.svg';
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import searchIcon from "../../assets/icons/search.svg";
import logo from "../../assets/icons/logo.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import phoneOutline from "../../assets/icons/phone-outline.svg";
import handshake from "../../assets/images/handshake.png"
import tick from "../../assets/icons/tick.svg";
import clock from "../../assets/icons/clock.svg"
import mailIcon from "../../assets/icons/mail.svg"
import star from "../../assets/icons/star.svg"
import chevron from "../../assets/icons/chevron.svg"
import profilePic from "../../assets/icons/lois.svg"
import roundTick from "../../assets/icons/round-tick.svg"
import constructor from "../../assets/images/constructor.png"
import workers from "../../assets/images/construction-workers.png"
import ceo from "../../assets/images/prof.png"
import lawyer from "../../assets/images/lawyer.png"
import politician from "../../assets/images/chief.png"
import { useEffect, useState } from 'react';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      userName: "Lois Topins",
      userDp: profilePic,
      description: "Thanks to the ICT hub, our business has transformed and reached new heights!",
    },
    {
      id: 2,
      userName: "TopTea Topins",
      userDp: profilePic,
      description: "The training programs offered are top-notch and have significantly improved my skills.",
    },
  ]);
  const history = useNavigate();
  
  const [currentHeader, setCurrentHeader] = useState("one");
  
  const [swiper, setSwiper] = useState();

  const handleSlideChange = (e) => {
    swiper.slideNext();
  };

  const handlePrevClick = () => {
    if (swiper && swiper.activeIndex > 0) {
      swiper.slidePrev();
    }
  };

  useEffect(() => {
    const headers = ["one", "two", "three", "four"];
    let currentIndex = 0;
    let interval;

    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % headers.length;
      setCurrentHeader(headers[currentIndex]);
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);

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
                <li><a href="#">Home</a></li>
                <li><a href="#aboutUs">About Us</a></li>
                <li>Services</li>
                <li>Testimonials</li>
                <li>Contact us</li>
              </ul>
              <button onClick={() => history('Login')}>Login</button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className={`${currentHeader}`}>
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
        <section id="testimonials">
          <h2>What Our Clients Say About Us</h2>
          <p>From Clients Or Partners, And Trainees</p>
          <Swiper
            module={[Navigation, Pagination]}
            spaceBetween={100}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(instance) => setSwiper(instance)}
            className='swiperContainer'
          >
            {reviews.map((review) => (
              <SwiperSlide className='reviewBox' key={review.id}>
                <div className="starRating">
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                  <img src={star} alt="Star" />
                </div>
                <p className="ratingText">{ review.description }</p>
                <img src={ review.userDp } alt="User" />
                <p className="user">{ review.userName }</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section id="team">
          <div className="container">
            <div className="teamWrap">
              <div className="teamMembers">
                <img src={ceo} alt="CEO" />
                <div className="teamPost">
                  <p>LUKMAN ABUBAKAR</p>
                  <p>CEO</p>
                </div>
              </div>
              <div className="teamMembers">
                <img src={lawyer} alt="Barrister" />
                <div className="teamPost">
                  <p>BARR. ABBAS ALIYU</p>
                  <p>LEGAL</p>
                </div>
              </div>
              <div className="teamMembers">
                <img src={politician} alt="Operational manager" />
                <div className="teamPost">
                  <p>DASHE JOSHUA YAKNAN</p>
                  <p>OPERATIONAL MANAGER</p>
                </div>
              </div>
            </div>
            <button>Meet Our Team <img src={chevron} alt="Chevron" /></button>
          </div>
        </section>
        <section id="benefits">
          <div className="benefitWrapper">
            <h2>Benefits Of Using Us</h2>
            <div className="benefitList">
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
              <div className="benefit">
                <img src={roundTick} alt="Tick" />
                <p>10,000+ Workers Across Nigeria</p>
              </div>
            </div>
            <button>Sign Up</button>
          </div>
        </section>
        <section id="contact">
          <h2>Send Us A Message Now</h2>
          <div className="contactBox">
            <div className="signupContainer">
              <input type="email" placeholder='Email Address' />
              <img src={mailIcon} alt="" />
            </div>
            <textarea name="" placeholder='Type your message here...' id="" cols="30" rows="10"></textarea>
          </div>
        </section>
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
 
export default LandingPage;