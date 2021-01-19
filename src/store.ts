import {createStore} from 'redux'
import reducers from './modules/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers, composeWithDevTools())

export default store;