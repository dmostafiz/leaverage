import {AUTH_USER} from '../types'

const initialState = {isAuth:false}

export default function authReducer(state = initialState, action) {

    switch (action.type) {
        case AUTH_USER:
            return action.payload
            break;
            
        default:
            return {...state}
            break;
    }
}