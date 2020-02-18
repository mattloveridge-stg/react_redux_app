import { createStore } from 'redux';
import { Reducers } from '../reducers/Reducers';

const initialState = { saveFieldValidationErrorsEmail: "",
                        saveFieldValidationErrorsPassword: "",
                        passwordValidity: false,
                        emailValidity: false,
                        formValidity: false,
                        loggedInStatus: false,
                        email: "emailDefault",
                        password: "passwordDefault",
                        errorMessageEmail: "",
                        errorMessagePassword: "",
                        spinning: false};

console.log("STORE/index.js    before create")

const store = createStore(Reducers, initialState);

console.log("STORE/index.js    store.getState() after create = ", store.getState())

export default store;


