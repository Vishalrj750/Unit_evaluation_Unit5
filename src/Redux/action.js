import { LOGIN, SHOW_DETAILS } from "./actionType";

export const loginFirst = ( payload ) => {
    return{
        type: LOGIN,
        payload
    }
}

export const showDetails = ( payload ) => {
    return{
        type: SHOW_DETAILS,
        payload
    }
}