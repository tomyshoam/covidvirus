import React from 'react'
import { Popup, CircleMarker } from 'react-leaflet';
import MapToolTip from '../MapToolTip/MapToolTip.component';

function MapMarker({id,markerData}) {
    return (
        <CircleMarker radius={10} fillColor={'rgba(255, 65, 108, 1)'} color={'rgba(255, 65, 108, 1)'} weight={2} key={id} center={[markerData.countryInfo.lat,markerData.countryInfo.long]}>
          <MapToolTip data={markerData}/>
          
          <Popup>
            {markerData.country}
          </Popup>
        </CircleMarker>
    )
}

export default MapMarker
