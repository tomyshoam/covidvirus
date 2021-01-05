import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';

import MapMarker from '../MapMarker/MapMarker.component'

function Map({data}) {
    return (
        <MapContainer
        center={[31.5, 34.75]}
        zoom={5}
        minZoom={3}
        zoomControl={false}
      worldCopyJump={true}
        style={{ height: '100vh', width: '100vw' }}
      >
        <TileLayer

          url="https://api.mapbox.com/styles/v1/tomyshoam/ck8hedw4q0mkw1ilidx9t8pm5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidG9teXNob2FtIiwiYSI6ImNqemZrbnJwdTBjcG0zY2x0ZXo0NTJ0NjkifQ.pALbvMD8IjdTU0olF3INxQ"
        />
        {
            data&&data.map((item,index) => (
                <MapMarker id={index} markerData={item}/>
                
            ))
        }
      </MapContainer>
    )
}

export default Map
