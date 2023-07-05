import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HashRouter} from "react-router-dom";
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
)
