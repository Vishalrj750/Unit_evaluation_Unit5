import { LOGIN, SHOW_DETAILS } from "./actionType";

const initState = {
    isAuth: false,
    employee_details: []
}

const reducer = ( state = initState, { type, payload } ) => {
    switch ( type ) {
        case LOGIN: {
            return {
                ...state,
                isAuth: true
            }
        }
        case SHOW_DETAILS: {
            return {
                ...state,
                employee_details: payload
            }
        }
        default:
            return state;
    }
}

export { reducer }