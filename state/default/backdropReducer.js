import { INIT_BACKDROP } from "../types";

const initialState = false

export default function backdropReducer(state = initialState, action) {
    // console.log("My Action from backdrop reducer", action.payload)

    switch (action.type) {
        case INIT_BACKDROP:
            return action.payload;

        default:
            return state
    }
}