import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import { persistStore } from 'redux-persist'
import { applyMiddleware} from 'redux'
import { legacy_createStore as createStore} from 'redux'


import reducers from '../reducers'
import { isDevelopment } from '../../config'

const middleware = [thunk]
middleware.push(reduxLogger)

export const store = createStore(reducers, applyMiddleware(...middleware))

export const persister = persistStore(store)
