import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { user } from './user'

const appReducer = combineReducers({
user
})
  

export type RootState = ReturnType<typeof appReducer>

/**
 * This is root state handler
 *
 * @param state
 * @param action
 *
 */

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
}

export default persistReducer(persistConfig, rootReducer)
