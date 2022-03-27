import React from "react"
import GoogleMapReact from "google-map-react"
import "../Map/map.css"
import LocationPin from "../LocationPin/LocationPin"

const Map = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 9.833963,
    lng: -83.865583,
  }
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyC9WS38cSwFMTmm5mT3LXE2dsECVE71Flw",
          }}
          defaultCenter={[9.833963, -83.865583]}
          defaultZoom={18}
          options={{ mapId: "e57f506baee76ce9", scrollwheel: false }}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map
