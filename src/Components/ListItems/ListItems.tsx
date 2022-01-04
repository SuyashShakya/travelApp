import React, {useState, createRef} from 'react';
import {Box, Typography, InputLabel, MenuItem, FormControl, Select, CircularProgress, useMediaQuery, useTheme} from '@material-ui/core';
import isEmpty from 'lodash/isEmpty';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { useSelector } from 'react-redux';
import { ContextWrapper } from '../../Context';

const ListItems = () => {
    const classes = useStyles()
    const places = useSelector((state: any) => state?.places);
    const context = React.useContext(ContextWrapper); 
    const [elRefs, setElRefs] = useState([]);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    React.useEffect(() => {
        /* eslint-disable */
        // @ts-ignore
        const refs = Array(places.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs)
    }, [places]);

    if(isEmpty(places)){
        return (
            <Box display='flex' height='100vh' alignItems='center' justifyContent='center'>
                Loading &nbsp;<CircularProgress size={20} />
            </Box>
        )
    }
    
    const placesToBeMaped = !isEmpty(context?.filteredPlaces) ? context?.filteredPlaces : places;
    return (
        <Box p={5} className={classes.container}>
            <Typography variant={isSmallScreen ? 'subtitle2' : 'h5'}>Restaurants, Hotels & Attractions around you</Typography>
            <br/>
            <FormControl>
                <InputLabel className={classes.inputLabel}>Type</InputLabel>
                <Select className={classes.inputLabel} value={context?.type} onChange={(e)=> context?.setType(e.target.value)}>
                    <MenuItem value='restaurants' >Resturants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>  
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputLabel}>Rating</InputLabel>
                <Select className={classes.inputLabel} value={context?.rating} onChange={(e)=> context?.setRating(e.target.value)}>
                    <MenuItem value='0'>All</MenuItem>
                    <MenuItem value='3'>Above 3.0</MenuItem>
                    <MenuItem value='4'>Above 4.0</MenuItem>
                    <MenuItem value='4.5'>Above 4.5</MenuItem>
                </Select>
            </FormControl> 
            <br /> <br />
            <Box height='75vh' overflow='auto'>
                {placesToBeMaped && placesToBeMaped.map((item: any, i: any) => {
                    return (
                        <div ref={elRefs[i]} key={`${item?.name}${i}`}>
                            <PlaceDetails place={item} refProp={elRefs[i]} selected={context?.selectedPlace === i}/> 
                        </div>                     
                    )
                    })
                }
            </Box> 
        </Box>
    )
}

export default ListItems;