import {    CHANGE_SEARCH_FIELD, 
    REQUEST_API_DATA_FAILED,
    REQUEST_API_DATA_PENDING,
    REQUEST_API_DATA_SUCCESS,

} from './constants';

const initialStateSeatch = {
    searchField : "", 
}

const initialStateApiData = { 
    error: false,
    isPending: false,
    data: []
}

export const searchRobots = (state=initialStateSeatch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD :
            return Object.assign({}, state,{searchField: action.payload});
        default:
            return state;
    }
}

export const requestApiData = (state=initialStateApiData, action={}) => {  
    switch(action.type) {
        case REQUEST_API_DATA_PENDING : 
            return Object.assign({}, state,{isPending: true})
        case REQUEST_API_DATA_SUCCESS :
            return Object.assign({}, state,{data: action.payload, isPending:false})
        case REQUEST_API_DATA_FAILED :
            return Object.assign({}, state, {isPending:false, error:action.payload})
        default:
            return state;
    }
}

