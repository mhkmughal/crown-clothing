import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducers';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collection/collection.reducer'

const persistConfig = {
    key :'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({

    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    collection: collectionReducer
});
export default persistReducer(persistConfig, rootReducer);