import logger from 'redux-logger';
import RootReducer from './root-reducer'
import { persistStore} from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };