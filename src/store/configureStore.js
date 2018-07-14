import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';
import userReducer from './reducers/user';
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
    places: placesReducer,
    user: userReducer,
    auth: authReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
