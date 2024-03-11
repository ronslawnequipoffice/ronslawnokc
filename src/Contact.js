import GoogleMapReact from "google-map-react";
import "./css/contact.css";
import {PhoneNumber, Hours, Address, FormsOfPayments} from "./ShopInfo";

export default function Contact() {

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

  return (
    <div>
      <div className="contact-content">
        <div className="contactInfo">
          <div className="infoLine">
            <Address/>
            <PhoneNumber/>
            <Hours/>
            <FormsOfPayments/>
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