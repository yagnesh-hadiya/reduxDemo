import {APIDATA} from '../constant';

const initialState={
    movieData:[],
}

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case APIDATA:
            // console.log(action)
            return {
                ...state,
                movieData:action.payload
            }
        default:
            return state;
    }
}
export default apiReducer;