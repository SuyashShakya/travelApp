import {combineReducers} from 'redux';
import {getPlaceReducer} from './placesReducer';

const reducers = combineReducers({
    places: getPlaceReducer
})

export default reducers;