import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'
import reducers from "../reducers";
import { AsyncStorage } from 'react-native';

const persistConfig = {
    key: 'root',
    storage:AsyncStorage, 
  }
   

const persistedReducer = persistReducer(persistConfig, reducers);
 
export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware());
  let persistor = persistStore(store)
  return { store, persistor }
}


