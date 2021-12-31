import React from 'react';
import GoogleMapReact from 'google-map-react';
import Box from '@material-ui/core/Box';

const Maps = () => {
    const coordinates= {lat: 0, lng: 0}
    return (
        <Box height='90vh'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
            >
            </GoogleMapReact>
        </Box>
    )
}

export default Maps;