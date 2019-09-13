import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    ADD_SMURF
} from '../actions';

export const initialState = [
    {
        name: null,
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
            return [
                ...state,
            //    { isFetching: true,
            //     error: ""}
            ];
        case FETCHING_SMURF_SUCCESS:
            console.log('Got Smurf',action.payload)
            
            return [
                ...state,
                
                {
                isFetching: false,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id
                }
            ];
            case ADD_SMURF:
                console.log('ADDING SMURF AAAAAAAAAAAAA', action.payload)
                console.log('NEW STATE', state)
                    return [
                        ...state,
                        action.payload
                    ];
        default:
            return state;
    }
};
