import { useNavigate } from "react-router-dom";

// Pic Imports
import cityPic from "../../assets/icons/city.svg";
import builderWrap from "../../assets/icons/builder.svg";
import tick from "../../assets/icons/tick.svg";
import clock from "../../assets/icons/clock.svg"
import constructionWorkers from "../../assets/images/constructionWorkers.jpg";

const HomeScreen = () => {
  const history = useNavigate();

  return (
    <div id="Home">
      <aside className="nav">
        <img src={cityPic} alt="City" />
        <p>We Bring the Workers to you. Anywhere, Anytime!</p>
      </aside>
      <div className="container">
        <section id="workers">
          <div className="infoWrap">
            <p>Find Workers and Labourers near you, for any kind of work</p>
            <button>Hire Workers</button>
          </div>
          <img src={builderWrap} alt="Builders" />
        </section>
        <section id="typeofWorkers" className="container">
          <h2>Find and hire all types of skilled workers</h2>
          <div className="workersSection">
            <div className="workerTile">
              <img src={constructionWorkers} alt="Construction Workers" />
              <p>Construction Workers</p>
            </div>
            <div className="workerTile">
              <img src={constructionWorkers} alt="Carpenters & Wood" />
              <p>Carpenters & Wood</p>
            </div>
            <div className="workerTile">
              <img src={constructionWorkers} alt="Painters & Screeders" />
              <p>Painters & Screeders</p>
            </div>
            <div className="workerTile">
              <img src={constructionWorkers} alt="Domestic Workers" />
              <p>Domestic Workers</p>
            </div>
            <div className="workerTile">
              <img src={constructionWorkers} alt="Warehouse Workers" />
              <p>Warehouse Workers</p>
            </div>
            <div className="workerTile">
              <img src={constructionWorkers} alt="Farmstead Workers" />
              <p>Farmstead Workers</p>
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
        </section>
      </div>
    </div>
  );
}
 
export default HomeScreen;