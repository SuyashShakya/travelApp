import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { MapContainer, TileLayer, Marker, MapConsumer} from 'react-leaflet';
import {DivIcon} from 'leaflet';
import {useSelector} from 'react-redux';
import {Box, Typography} from '@material-ui/core';
import ReactDOMServer from 'react-dom/server';
import { Rating } from '@material-ui/lab';

import { ContextWrapper } from '../../Context';
import useStyles from './styles';

interface MapsProps {
	coordinates?: any,
	setCoordinates?: any,
	setBounds?: any
}

const Maps: React.FC<MapsProps> = ({coordinates, setCoordinates}) => {
    const classes = useStyles()
    const places = useSelector((state: any) => state?.places)
    const context = React.useContext(ContextWrapper);
    const placesToBeMaped = !isEmpty(context?.filteredPlaces) ? context?.filteredPlaces : places;

    const Icon = ({item}: any) => {
        return (
            <Box className={classes.divIcon} > 
                <Typography variant='caption' className={classes.header}>{item.name}</Typography>    
                <img src={item?.photo ? item?.photo?.images?.thumbnail?.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt='' height={50} width={50} />
                <Rating name='read-only' size='small' value={Number(item.rating)} readOnly />
            </Box>
        )
    }

    const divIcon = ({item}: any) => new DivIcon({
            html: ReactDOMServer.renderToString(<Icon item={item} />)
    })


    return (
        <Box className={classes.container}>
            <Typography variant='subtitle2' className={classes.header}>Click on the map to get restaurnats, hotels and attractions of that area</Typography>
            <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} scrollWheelZoom={true} className={classes.leafletContainer} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapConsumer>
                    {(map) => {
                        map.on('click', function (e) {
                            setCoordinates((e as any)?.latlng)
                        });
                        return null;
                    }}
                </MapConsumer>
                {placesToBeMaped.map((item: any, index: any) => {
                    if(isEmpty(item.latitude)){
                        return true
                    }
                    return(
                        <Marker
                            key={`${item?.name}${index}`} 
                            position={[Number(item?.latitude), Number(item?.longitude)]} 
                            icon={divIcon({item})}  
                            eventHandlers={{
                                click: (i) => {
                                    context?.setSelectedPlace(index)
                                },
                            }}
                        />
                    )
                })}     
            </MapContainer>
        </Box>
    )
}

export default Maps;