import { createStore, combineReducers } from 'redux'
import numerosReducer from '../reducers/numerosReducer'

const reducers = combineReducers({
    numerosReducer
})

const store = createStore(reducers);

export default store;