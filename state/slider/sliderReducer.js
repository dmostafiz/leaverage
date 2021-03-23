import {GET_SLIDER} from '../types'
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    sliders:[]
}

export default function sliderReducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_SLIDER:
            return {...state, sliders: action.payload}
            break; 
        default:
            return {...state}
    }
}