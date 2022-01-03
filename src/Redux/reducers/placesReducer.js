import {ActionTypes} from '../actiontypes';

export const getPlaceReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.GET_PLACES:
            return action.payload;
        default:
            return state    
    }
}