import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
var data = require('../assets/db.json')

console.log(data)
function RawMaps() {
    return (
        <GoogleMap 
            defaultZoom={14} 
            defaultCenter={{lat: -23.087428, lng: -47.205198}}
        >   
            {data.map( (atm, index) => (
                <Marker 
                    key={index}
                    position={{
                        lat: parseFloat(atm.coordinates.lat),
                        lng: parseFloat(atm.coordinates.lng)
                    }}
                />
                
            ))};
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(RawMaps))

export default function Atms() {
    return (
        <div style={{width: '100vw', height: '91vh'}}>
            <WrappedMap
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDethIh9zD-IUCTB8jEveaqpazlaGLBM34'}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`}} />}
                mapElement={<div style={{ height: `100%` , display: 'flex' }} />}
            />
        </div>
    )
}
