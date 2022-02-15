import { createStore, combineReducers } from 'redux'
import step1Reducer from './reducers/step1Reducer'
import step2Reducer from './reducers/step2Reducer'
import step3Reducer from './reducers/step3Reducer'
import appReducer from './reducers/appReducer'




const reducers = combineReducers({
    appReducer,
    step1Reducer,
    step2Reducer,
    step3Reducer,
})

const store = createStore(reducers)

export default store