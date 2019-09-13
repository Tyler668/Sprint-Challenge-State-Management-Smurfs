// import {
//     FETCHING_COMIC_START,
//     FETCHING_COMIC_SUCCESS,
//     FETCHING_COMIC_FAILURE
// } from '../actions';

export const initialState = {
    name: '',
    age: null,
    height: null,
    id: null,
    isFetching: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {

      default:
        return state;
    }
  };
  