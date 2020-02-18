import * as actionTypes from "./actionType/ActionType";
import store from "./store/index.js";
import setLoggedInStatusCreator from "./actionCreators/setLoggedInStatusCreator";
import saveEmailCreator from "./actionCreators/saveEmailCreator";
import savePasswordCreator from "./actionCreators/savePasswordCreator";
import saveFieldValidationErrorsEmailCreator from "./actionCreators/saveFieldValidationErrorsEmailCreator";
import saveFieldValidationErrorsPasswordCreator from "./actionCreators/saveFieldValidationErrorsPasswordCreator";
import setSpinningCreator from "./actionCreators/setSpinningCreator";
import setEmailValidityCreator from "./actionCreators/setEmailValidityCreator";
import setFormValidityCreator from "./actionCreators/setFormValidityCreator";
import { setPasswordValidityCreator } from "./actionCreators/setPasswordValidityCreator";

export default function  dispatchAction( actionType, value ) {

    console.log( "\nDISPATCHACTION()  TOP  ---------------------------------------" );
    console.log( "DISPATCHACTION actionType = ", actionType );
    console.log( "DISPATCHACTION value = ", value );

    switch ( actionType ) {

        case actionTypes.SET_FORM_VALIDITY_AT:
            store.dispatch( setFormValidityCreator ( value ) ) ;
            break;
        case actionTypes.SET_LOGGEDIN_STATUS_AT:
            console.log("dispatchAction      case actionTypes.SET_LOGGEDIN_STATUS_AT  value = ", value);
            console.log("dispatchAction      case actionTypes.SET_LOGGEDIN_STATUS_AT  store.getState() before = ", store.getState());
            store.dispatch( setLoggedInStatusCreator ( value ) ) ;
            console.log("dispatchAction      case actionTypes.SET_LOGGEDIN_STATUS_AT  store.getState() after = ", store.getState());
            break;
        case actionTypes.SET_EMAIL_VALIDITY_AT:
            store.dispatch( setEmailValidityCreator ( value ) ) ;
            break;
        case actionTypes.SET_PASSWORD_VALIDITY_AT:
            store.dispatch( setPasswordValidityCreator ( value ) ) ;
            break;
        case actionTypes.SAVE_EMAIL_AT:
            store.dispatch( saveEmailCreator ( value ) ) ;
            break;
        case actionTypes.SAVE_PASSWORD_AT:
            store.dispatch( savePasswordCreator ( value ) ) ;
            break;
        case actionTypes.SAVE_FIELD_VALIDATION_ERRORS_EMAIL_AT:
            store.dispatch( saveFieldValidationErrorsEmailCreator ( value ) ) ;
            break;
        case actionTypes.SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT:
            store.dispatch( saveFieldValidationErrorsPasswordCreator ( value ) ) ;
            break;
        case actionTypes.SET_SPINNING_AT:
            store.dispatch( setSpinningCreator ( value ) ) ;
            break;
        default:
            console.log("DISPATCHACTION BEFORE: default");
    };
















}         //DISPATCHACTION
