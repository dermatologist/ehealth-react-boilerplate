import {combineReducers} from 'redux'
import counter from './counter'
import drugReducer from './drugReducer'

const rootReducer = combineReducers({
  counter,
  drug: drugReducer,
});

export default rootReducer
