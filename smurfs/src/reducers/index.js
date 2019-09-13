import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE
} from '../actions';

export const initialState = [
    {
        name: '',
        age: null,
        height: null,
        id: null,
        isFetching: false,
        error: ''
    }
];


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id
            };
        default:
            return state;
    }
};
