import React from 'react';
import {Card, CardContent, CardMedia, Typography, Box, Chip, CardActions, Button, useTheme, useMediaQuery} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn'; 
import PhoneIcon from '@material-ui/icons/Phone';
import useStyles from './styles';
import { Rating } from '@material-ui/lab';

interface PlacesProps {
	place?: any,
    selected?: any,
    refProp?: any
}

const PlaceDetails: React.FC<PlacesProps> = ({place, selected, refProp}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const classes = useStyles();
    return (
        <Card className={classes.card}> 
            <CardMedia
                component="img"
                alt={place?.name}
                height={isSmallScreen ? 150 : 350}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            />
            <CardContent>
            <Typography gutterBottom variant={isSmallScreen ? 'subtitle2' : 'h5'} component="div">
                {place.name}
            </Typography>
            <Box display="flex" justifyContent="space-between" my={2}>
                <Rating name="read-only" value={Number(place.rating)} readOnly />
                <Typography component="legend" variant={isSmallScreen ? 'subtitle2' : 'h5'}>{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant={isSmallScreen ? 'body2' : 'subtitle1'}>Price: </Typography>
                <Typography variant={isSmallScreen ? 'caption' : 'subtitle2'}>{place.price}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant={isSmallScreen ? 'body2' : 'subtitle1'}>Ranking: </Typography>
                <Typography variant={isSmallScreen ? 'caption' : 'subtitle2'}>{place.ranking}</Typography>
            </Box>
            {place?.awards?.map((award: any) => (
                <Box key={award.display_name} display="flex" justifyContent="space-between" my={1} alignItems="center">
                    <img src={award.images.small} />
                    <Typography variant={isSmallScreen ? 'caption' : 'subtitle2'}>{award.display_name}</Typography>
                </Box>
            ))}
            {place?.cuisine?.map(({name}: any) => (
                <Chip key={name} size='small' label={name} className={classes.chip} />
            ))}
            <br /><br />
            {place.address && (
                <Typography gutterBottom variant={isSmallScreen ? 'caption' : 'subtitle1'} className={classes.subtitle}>
                    <LocationOnIcon />{place.address}
                </Typography>
            )}
            {place.phone && (
                <Typography variant={isSmallScreen ? 'caption' : 'subtitle1'} className={classes.spacing}>
                    <PhoneIcon /> {place.phone}
                </Typography>
            )} 
            </CardContent>
            <CardActions>
                <Button size='small' className={classes.colorStyle} onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size='small' className={classes.colorStyle} onClick={() => window.open(place.website, '_blank')}>
                    Website
                </Button>
            </CardActions>
        </Card>
    );
}

export default PlaceDetails;