import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
 import * as serviceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { reducer } from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const smurfState = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
        <Provider store={smurfState}>
            <App />
        </Provider>
        , document.getElementById('root')
    );



serviceWorker.unregister();
