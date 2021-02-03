import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import initialState from './initalState'

const store = createStore(rootReducer, initialState)

export default store
