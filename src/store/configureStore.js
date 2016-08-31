import {combineReducers, createStore, compose} from 'redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';

import {topicsReducer, imagesReducer, imageReducer, commentsReducer} from 'reducers';
export default (initialState = {}) => {
    const reducer = combineReducers({
        topics: topicsReducer,
        images: imagesReducer,
        image: imageReducer,
        comments: commentsReducer
    });

    return createStore(reducer, initialState, compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};


