import { compose, applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promised';
import createReducer from './reducers';

const devtools = window.devToolsExtension || (() => noop => noop);

export default (initialState = fromJS({}), history) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middlewares = [
        thunk,
        promiseMiddleware,
        routerMiddleware(history),
    ];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [
        applyMiddleware(...middlewares),
        devtools(),
    ];

    const store = createStore(
        createReducer(),
        fromJS(initialState),
        compose(...enhancers)
    );

    return store;
};

