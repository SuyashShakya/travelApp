import axios from 'axios';
import {ActionTypes} from '../actiontypes';

export const fetchPlaces = ({coordinates, type}) => {
    const baseUrl = `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`
    const options = {
        params: {
            latitude: coordinates.lat,
            longitude: coordinates.lng,
        },
        headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'e791329e70mshdaf695113ed9902p12a0c0jsnabc3b45c18d5'
        }
    };    
    return async(dispatch) => {
        const result = await axios.get(baseUrl, options)
        dispatch({type:ActionTypes.GET_PLACES, payload: result?.data?.data})
    }
}