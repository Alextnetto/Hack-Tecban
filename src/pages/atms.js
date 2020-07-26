import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';


function RawMaps() {
    return (
        <GoogleMap 
            defaultZoom={14} 
            defaultCenter={{lat: -27.5607012, lng: -48.5003837}}
        >
            <Marker position={{lat: -27.5607012, lng: -48.5003837}}/>
            <Marker position={{lat: -27.546184, lng: -48.4996918}}/>
            <Marker position={{lat: -27.556572, lng: -48.5004532}}/>
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
