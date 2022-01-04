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
            'x-rapidapi-key': '4bfb3efcb7msh22683d0687b904dp14a9f7jsn45cac8a7115c'
        }
    };    
    return async(dispatch) => {
        const result = await axios.get(baseUrl, options)
        dispatch({type:ActionTypes.GET_PLACES, payload: result?.data?.data})
    }
}