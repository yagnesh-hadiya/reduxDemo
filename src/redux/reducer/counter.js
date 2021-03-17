import { INCREMENT, DECREMENT, RESET } from '../constant';
const initialState = {
    count: 0,
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count :action.payload
            }

        case DECREMENT:
            return {
                ...state,
                count :action.payload
            }
        case RESET:
            return 0;
        default:
            return state;
    }
}
export default counterReducer;