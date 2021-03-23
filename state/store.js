import {combineReducers, createStore, applyMiddleware} from 'redux'
import sliderReducer from './slider/sliderReducer'
import authReducer from './auth/authReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    sliders: sliderReducer,
    auth: authReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store