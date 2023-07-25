import GoogleMapReact from 'google-map-react'
import "./css/contact.css";

export default function Contact(){

  const location = {
    address: '5700 S Western Ave, Oklahoma City, OK 73109',
    lat: 35.4092585,
    lng: -97.5299784,
  }

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: { lat: 35.40928408444798, lng: -97.52972873038354 },
    map,
    title: 'Ron\'s Lawn Equipment'
    });
  };
  
  return(
    <div className="contact-content">
      <div className="google-map" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBol_7kzcpNWjPPN6ATe_FoAx_7CGOiR_0' }}
          defaultCenter={location}
          defaultZoom={17}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
      <div className='contactInfo'>
        <div className='infoLine'>

          <div className='addressLine'>
            <label className='addressLabel'>Address</label>
            <span className='addressInfo'>5700 S Western Ave, Oklahoma City, OK 73109</span>
          </div>

          <div className='phoneLine'>
            <label className='phonelabel'>Phone Number</label>
            <span className='phoneInfo'>(405)631-3801</span>
          </div>

          <div className='hoursLine'>
            <label className='hoursLabel'>Hours</label>
            <span className='hoursInfo'>Monday - Friday : 8:00 am - 5:00 pm </span>
            <span className='hoursInfo'>Saturday : 8:00 am - 12:00 pm</span>
            <span className='hoursInfo'>Sunday : Closed</span>
          </div>

        </div>
      </div>
    </div>
  )
}