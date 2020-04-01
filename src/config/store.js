import { createStore, applyMiddleware } from 'redux';

import reducers from "../reducers";

export default store = createStore(reducers, {}, applyMiddleware());