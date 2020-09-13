import { combineReducers } from "redux";
import claimReducer from './claimReducer';

const rootReducer = combineReducers({
    claim: claimReducer
})

export default rootReducer;