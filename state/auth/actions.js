import {AUTH_USER} from '../types'

export const makeAuthentication = ({isAuth, username, email, user_type, _id, profile}) => {
    return {
        type: AUTH_USER,
        payload: {isAuth, username, email, user_type, _id, profile}
    }

}