import React from "react";
import IndexPageNav from "../Components/IndexPageNav";
import "../Styles/index.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
const Index = () => {
  return (
    <div className="IndexContainer">
      <div className="indexHeadder">
        <div>
          <img
            src="https://apod.nasa.gov/apod/apod.gif"
            style={{ marginTop: "9px" }}
            alt=""
          />
        </div>
        <div>
          <h1>Astronomy Picture of the Day</h1>
          <h1 style={{ marginTop: "-19px" }}>Index - Main Page</h1>
        </div>
      </div>
      <hr />
      <div className="indexNavContainer">
        <IndexPageNav />
      </div>
      <hr />

      <div className="firstSection">
        <div className="strarsimg">
          <div>
            <img
              src="https://apod.nasa.gov/apod/calendar/S_960823.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>Cosmos</h2>
          </div>
          <div>
            <img
              src="https://apod.nasa.gov/apod/calendar/S_960522.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="startsText">
          <div className="starsdiv">
            <span>Stars :</span>
            <Link to=""> Binary Stars </Link> *<Link to=""> Black Holes </Link>{" "}
            *<Link to=""> Globular Clusters </Link> *
            <Link to=""> Individual Stars </Link> *
            <Link to=""> Neutron Stars </Link> *<Link to=""> Nurseries </Link> *
            <Link to="">Open Clusters </Link> *<Link to="">Sun </Link> *
            <Link to="">White Dwarfs</Link> *
          </div>
          <div className="galexy">
            <span>Galaxies : </span>
            <Link to=""> Clusters of Galaxies</Link>*
            <Link to=""> Colliding Galaxies </Link>*
            <Link to=""> Elliptical Galaxies</Link>*
            <Link to="">Local Group </Link>*<Link to="">Milky Way</Link>*
            <Link to=""> Spiral Galaxies</Link>*
          </div>
          <div className="Nebulae">
            <span>Nebulae :</span>
            <Link to="">Dark Nebulae </Link>*
            <Link to=""> Emission Nebulae </Link>*
            <Link to=""> Planetary Nebulae</Link>*
            <Link to=""> Reflection Nebulae</Link>*
            <Link to=""> Supernova Remnants</Link>*
          </div>
          <div className="Miscellaneous">
            <span>Miscellaneous :</span>
            <Link to=""> Quasars/Active Galactic Nuclei </Link>*
            <Link to=""> Dark Matter</Link>*
          </div>
        </div>
      </div>
      <hr />
      <div className="SeconSection">
        <div className="SecondSectionText">
          <div>
            <Link to="">Sun</Link>*<Link to="">Mercury</Link>*
            <Link to="">Venus</Link>*<Link to=""> Earth </Link>*
            <Link to=""> Earth's Moon</Link>*<Link to="">Mars</Link>*
            <Link to="">Jupiter</Link>*<Link to=""> Jupiter's Moons</Link>*
            <Link to="">Saturn</Link>*<Link to="">Saturn's Moons</Link>*
            <Link to="">Uranus</Link>*<Link to="">Neptune</Link>*
            <Link to="">Pluto</Link>*
          </div>

          <div className="Comets">
            <span>Comets----</span>
            <Link to=""> Hyakutake</Link>*<Link to="">Hale-Bopp </Link>*
            <Link to="">Halley</Link>*
          </div>

          <div>
            <Link to="">Asteroids</Link>
          </div>
        </div>
        <div className="SecondSectionimg">
          <p style={{ fontSize: "27px" }}> Solar System</p>&nbsp;
          <img
            src="https://apod.nasa.gov/apod/calendar/S_971029.jpg"
            style={{ width: "70px", height: "70px" }}
            alt=""
          />{" "}
          &nbsp;
          <img
            style={{ width: "70px", height: "70px" }}
            src="https://apod.nasa.gov/apod/calendar/S_960501.jpg"
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="ThirdSection">
        <div className="ThirdSectionimg">
          <img
            style={{ width: "70px", height: "70px" }}
            src="https://apod.nasa.gov/apod/calendar/S_960210.jpg"
            alt=""
          />
          <p style={{ fontSize: "27px" }}>Space Technology</p>
        </div>
        <div className="ThirdSectiontext">
          <Link to=""> Rockets/Launch Vehicles </Link>*
          <Link to="">Orbiting Observatories</Link>*
          <Link to="">Space Stations</Link>*
          <Link to="">Earth Observatories</Link>*
        </div>
      </div>
      <hr />
      <div className="ThirdSection">
        <div className="ThirdSectiontext">
          <Link to="">Scientists</Link>*<Link to=""> Astronauts</Link>*
        </div>
        <div className="ThirdSectionimg">
          <p style={{ fontSize: "27px" }}>Space Technology</p> &nbsp;
          <img
            style={{ width: "70px", height: "70px" }}
            src="https://apod.nasa.gov/apod/calendar/S_971011.jpg"
            alt=""
          />
        </div>
      </div>
      <hr />

      <div className="ThirdSection">
      <div className="ThirdSectionimg">
         
          <img
            style={{ width: "70px", height: "70px" }}
            src="https://apod.nasa.gov/apod/calendar/S_970809.jpg"
            alt=""
          />&nbsp;
           <p style={{ fontSize: "27px" }}>Sky</p> 
        </div>
        <div className="ThirdSectiontext">
          <Link to="">Messier Objects</Link>*<Link to=""> Sky Views</Link>*
        </div>
        
      </div>
      <hr />
      <div className="FooterSection">
        <Footer/>
      </div>
    </div>
  );
};

export default Index;
