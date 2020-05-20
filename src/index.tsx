import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.component';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {default as rootReducer} from "./redux/reducers";
import {middleware, middlewareHandler} from '@pagoru/redux-middleware';
import {ActionTypes} from "./redux/actions";
import {GetDateFormat} from "./utils/CommonUtils";

const store = createStore(rootReducer, applyMiddleware(thunk, middleware));
middlewareHandler((
    action: ActionTypes,
    getState
) => {
    console.log(GetDateFormat(), '?', action.type);
    // Add willReduce
    return action;
}, () => {});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
