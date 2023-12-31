import React from 'react';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import {homePageReducer} from "./reducers/homePageReducer";
import {appReducer} from "./reducers/appReducer";


export type AppStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
    homePage: homePageReducer,
    app: appReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))