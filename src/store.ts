import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './modules/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import renewAccessToken from './middlewares/renewAccessToken'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk, renewAccessToken)))

export default store;