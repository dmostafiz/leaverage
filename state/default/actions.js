import {INIT_BACKDROP} from '../types'

export const initBackdrop = (data) => {
    // console.log("My Action from backdrop", data)
    return ({
        type: INIT_BACKDROP,
        payload: data
    })
}
