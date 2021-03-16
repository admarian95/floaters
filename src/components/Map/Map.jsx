import './Map.css'
import GoogleMapReact from 'google-map-react'

const Map = ()=>{
    const center= {
        lat: 12.9653652,
        lng: 80.2461057
      }

    return (
<div className="google-map">
      <GoogleMapReact
        // bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={16}
      >
        {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
      </GoogleMapReact>
    </div>
    )
}

export default Map