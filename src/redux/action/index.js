import { INCREMENT, DECREMENT, APIDATA } from '../constant';
import Axios from 'axios';
export const increment = (cnt) => {
    return  {
        type: INCREMENT,
        payload:cnt
    }
}
export const decrement = (cnt) => {
    return {
        type: DECREMENT,
        payload:cnt
    }
}

export const apiData = () => async (dispatch) => {
    console.log('apidata call=')
    const response = await Axios.get('https://reactnative.dev/movies.json')
        .catch((e) => console.error(e))
    return dispatch({
        type: APIDATA,
        payload: response.data

    })
}