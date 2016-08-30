import {combineReducers, createStore, compose} from 'redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';

import {imagesReducer} from 'reducers';

export default (initialState = {}) => {
    const reducer = combineReducers({
       images: imagesReducer
    });

    return createStore(reducer, initialState, compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};


