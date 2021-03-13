import { INCREMENT, DECREMENT, RESET, APIDATA } from '../constant';
import Axios from 'axios';
export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const apiData = () => async (dispatch) => {
    console.log('apidata call=')
    const response = await Axios.get('https://reactnative.dev/movies.json')
        .catch((e) => console.error(e))
    // console.log('====',response);
    return dispatch({
        type: APIDATA,
        payload: response.data

    })
}