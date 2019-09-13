import Axios from "axios";



export const ADD_SMURF = 'ADD_SMURF'
export const addSmurf = smurf => {
    console.log('Add smurf action:', smurf)
    return { type: ADD_SMURF, payload: smurf }
}

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const getSmurfAC = () => dispatch => {
    dispatch({ type: FETCHING_SMURF_START });
    Axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log('Action data', res.data)
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data[0] });
        })
        .catch(err => {
            dispatch({ type: FETCHING_SMURF_FAILURE, payload: err });
        });


};


