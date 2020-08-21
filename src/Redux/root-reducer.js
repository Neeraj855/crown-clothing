import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import cartReducer from './Cart/cartReducer';
import { persistReducer } from 'redux-persist';
import directoryReducer from "./directory/directoryReducer";
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/shopReducer'



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);