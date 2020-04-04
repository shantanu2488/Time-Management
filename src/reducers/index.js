import { combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'


import authReducer from "./auth.reducer.js";

const reducers = {
   authReducer,
   form: formReducer

};

export default combineReducers(reducers);