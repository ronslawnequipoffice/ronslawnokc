import GoogleMapReact from "google-map-react";
import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/temp.css";

import mainCarousel, { carouselLoader } from "./mainCarousel";

export default function Temp() {
  // console.log('REACT_APP_GOOGLE_MAPS_API_KEY', process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

  const location = {
    address: "5700 S Western Ave, Oklahoma City, OK 73109",
    lat: 35.4092585,
    lng: -97.5299784,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 35.40928408444798, lng: -97.52972873038354 },
      map,
      title: "Ron's Lawn Equipments",
    });
  };

  // return(
  //   <div>test</div>
  // )

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Ron's Lawn Equipment</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
      <mainCarousel />
      <div className="temp-content">
        <div className="sorry">
          <span className="firstSpan">We are sorry!</span>
          <span>Our new website is still under construction.</span>
          <span>Here is some information to help you contact us.</span>
          <span>We look forward hearing from you!</span>
        </div>
        <div className="contactInfo">
          <div className="infoLine">
            <div className="addressLine">
              <label className="addressLabel">Address</label>
              <span className="addressInfo">5700 S Western Ave</span>
              <span>Oklahoma City, OK 73109</span>
            </div>

            <div className="phoneLine">
              <label className="phoneLabel">Phone Number</label>
              <span className="phoneInfo">(405)631-3801</span>
            </div>

            <div className="hoursLine">
              <label className="hoursLabel">Hours</label>
              <span className="hoursInfo">
                Monday - Friday : 8:00 am - 5:00 pm{" "}
              </span>
              <span className="hoursInfo">Saturday : 8:00 am - 12:00 pm</span>
              <span className="hoursInfo">Sunday : Closed</span>
              <span className="hoursInfo">
                Labor Day Weekend(Sep. 2nd - 4th) : Closed
              </span>
            </div>
          </div>
        </div>
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            defaultCenter={location}
            defaultZoom={17}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          ></GoogleMapReact>
        </div>
      </div>
    </div>
  );
}
