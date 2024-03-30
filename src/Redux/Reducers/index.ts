import {applyMiddleware, combineReducers,createStore}  from 'redux'
import { UserReducer, UserReducerState } from './UserReducer';
import thunk from 'redux-thunk';
export interface rootReducerState {
    userReducer : UserReducerState
}
const rootReducer = combineReducers({
    userReducer : UserReducer,
});
console.log(process.env.NODE_ENV,'enf');
export default createStore(rootReducer,applyMiddleware(thunk));