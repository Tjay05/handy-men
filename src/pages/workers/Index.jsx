// Pic Imports
import cityPic from "../../assets/icons/city.svg";
import star from "../../assets/icons/tinyStar.svg";
import Tick from "../../assets/icons/tinyTick.svg";
import marker from "../../assets/icons/marker.svg";
import contact from "../../assets/icons/contact.svg";
import profilePic from "../../assets/images/profilePic.png";

const GeneralWorkers = () => {
  return (
    <div id="workers">
      <aside className="nav">
        <img src={cityPic} alt="City" />
        <p>We Bring the Workers to you. Anywhere, Anytime!</p>
      </aside>
      <div className="container">
        <h1>My Workers</h1>
      </div>
      <div className="result-nav container">
        <p>Showing Results</p>
        <p>2 of 21</p>
      </div>
      <div className="workersWrap">
        <div className="container">
          <div className="workerBio">
            <div className="container">
              <div className="workerInfo">
                <div className="profContainer">
                  <img className="DP" src={profilePic} alt="Profile Picture" />
                  <div className="workerName">
                    <p className="workerName">Adam Toppins S.</p>
                    <p className="review">24 Reviews</p>
                  </div>
                </div>
                <div className="ratingwrap">
                  <img src={star} alt="Star" />
                  <p>4.8</p>
                </div>
              </div>
              <div className="experience">
                <img src={Tick} alt="Tick" />
                <p>30 Jobs | Carpenter</p>
              </div>
              <div className="location">
                <img src={marker} alt="Marker" />
                <p>Jos</p>
              </div>
              <div className="verification">
                <img src={contact} alt="Contact" />
                <p>Shublah Verified</p>
              </div>
              <p id="aboutMe">
                <b>About me:</b> dolor sit amet consectetur. Egestas pellentesque vitae amet est sed arcu placerat integer. Sem vel risus parturient urna suspendisse lacus. Dui nisi magna morbi pulvinar sit. Turpis eros nec mattis eget scelerisque. Magna tincidunt at id consectetur sollicitudin. Id magna imperdiet vitae etiam in sed sed orci. Turpis senectus vitae sit laoreet tincidunt ipsum amet molestie gravida. Eu odio aliquam lorem aliquam est. Convallis sed vel egestas sit ut amet.
              </p>
            </div>
          </div>
          <div className="workerBio">
            <div className="container">
              <div className="workerInfo">
                <div className="profContainer">
                  <img className="DP" src={profilePic} alt="Profile Picture" />
                  <div className="workerName">
                    <p className="workerName">Adam Toppins S.</p>
                    <p className="review">24 Reviews</p>
                  </div>
                </div>
                <div className="ratingwrap">
                  <img src={star} alt="Star" />
                  <p>4.8</p>
                </div>
              </div>
              <div className="experience">
                <img src={Tick} alt="Tick" />
                <p>30 Jobs | Carpenter</p>
              </div>
              <div className="location">
                <img src={marker} alt="Marker" />
                <p>Jos</p>
              </div>
              <div className="verification">
                <img src={contact} alt="Contact" />
                <p>Shublah Verified</p>
              </div>
              <p id="aboutMe">
                <b>About me:</b> dolor sit amet consectetur. Egestas pellentesque vitae amet est sed arcu placerat integer. Sem vel risus parturient urna suspendisse lacus. Dui nisi magna morbi pulvinar sit. Turpis eros nec mattis eget scelerisque. Magna tincidunt at id consectetur sollicitudin. Id magna imperdiet vitae etiam in sed sed orci. Turpis senectus vitae sit laoreet tincidunt ipsum amet molestie gravida. Eu odio aliquam lorem aliquam est. Convallis sed vel egestas sit ut amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default GeneralWorkers;