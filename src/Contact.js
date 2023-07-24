
import GoogleMapReact from 'google-map-react'
// import "./contact.css";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">The google map</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBol_7kzcpNWjPPN6ATe_FoAx_7CGOiR_0' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;