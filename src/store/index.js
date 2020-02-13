import { createStore } from 'redux';
import Reducers from '../reducers/Reducers';

const initialState = { signedInStatus: false,
                        email: ""};

const store = createStore(Reducers, initialState);

console.log("store/index.js", store.getState())

export default store;


