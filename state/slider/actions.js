import {GET_SLIDER} from '../types'

export const getInitialSliders = (sliders) => async (dispatch) => {


    dispatch({
        type: GET_SLIDER,
        payload: sliders
    })
}