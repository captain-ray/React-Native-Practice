import { combineReducers,createStore,compose } from 'redux';

import placeReducer from './reducers/places';

const rootReducer = combineReducers({
    placeReducer: placeReducer
})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const configureStore = () => {
    return createStore(rootReducer,composeEnhancers())
};

export default configureStore;
