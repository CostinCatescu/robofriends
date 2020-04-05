import {    CHANGE_SEARCH_FIELD, 
            REQUEST_API_DATA_PENDING,
            REQUEST_API_DATA_SUCCESS,
            REQUEST_API_DATA_FAILED,

        } from './constants';

export const setSearchField = (text) => ({
    type : CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestApiData = (url) => (dispatch) => {
    dispatch({ type : REQUEST_API_DATA_PENDING});
    fetch(url)
        .then(res => res.json())
        .then( res => {
                res.unshift({
                    "id": 11,
                    "name": "Costin Catescu",
                    "username": "Costin",
                    "email": "costin@example.com",
                }, 
                { 
                    "id": 12,
                    "name": "Cristian Ionescu",
                    "username": "Cristi",
                    "email": "Ionescucristianstefan@gmail.com",
                }
            )
            return res
        })
        .then( data => dispatch({ type: REQUEST_API_DATA_SUCCESS, payload: data }))
        .catch( error => dispatch({ type : REQUEST_API_DATA_FAILED,payload: error }))
}
