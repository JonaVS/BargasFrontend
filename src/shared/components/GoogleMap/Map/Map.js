import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GoogleMapReact from "google-map-react"
import LocationPin from "../LocationPin/LocationPin"
import * as styles from "./map.module.css"

const Map = ({ zoom }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiGeneralWebsiteInfo {
        businessLat
        businessLng
      }
    }
  `)

  const { businessLat, businessLng } = data.strapiGeneralWebsiteInfo

  return (
    <div className={styles.googleMap}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GATSBY_GOOGLE_MAP_KEY,
        }}
        defaultCenter={[businessLat, businessLng]}
        defaultZoom={zoom}
        options={{
          mapId: process.env.GATSBY_GOOGLE_MAP_ID,
          scrollwheel: false,
        }}
      >
        <LocationPin lat={businessLat} lng={businessLng} />
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  zoom: 18,
}

export default Map
