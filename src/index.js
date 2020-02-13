import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store/index.js";

{ console.log("src/index store.getState()", store.getState()) }
{ console.log("src/index store.getState().signedInStatus", store.getState().signedInStatus) }


ReactDOM.
    render(
            (
                <App store = { store } />
            ),
    document.getElementById( 'root' )
) ;

