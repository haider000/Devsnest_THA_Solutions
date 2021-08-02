import cityReducer from './cityReducer'
import dataReducer from './dataReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({ cityReducer, dataReducer })
export default rootReducer
