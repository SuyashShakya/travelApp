import axios from 'axios';

const baseUrl = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'f9159f7204mshedb4921c92bad61p1c3084jsn23578bdee426'
  }
};

export const getPlacesData = async () => {
    try {
        const result = axios.get(baseUrl, options)
        return result?.data?.data
    } catch (e) {
        console.error('Error:', e)
    }
}