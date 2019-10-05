import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tickets } from './reducers/ticketsReducer';
import { dialogReducer } from 'redux-reactstrap-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const allReducers = combineReducers({
    tickets,
    dialogReducer: dialogReducer
});

const store = createStore(
    allReducers,
    composeWithDevTools(
    applyMiddleware(thunk),
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
