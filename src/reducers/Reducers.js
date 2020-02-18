import { SET_FORM_VALIDITY_AT } from '../actionType/ActionType';
import { SET_PASSWORD_VALIDITY_AT } from '../actionType/ActionType';
import { SET_EMAIL_VALIDITY_AT } from '../actionType/ActionType';
import { SET_LOGGEDIN_STATUS_AT } from '../actionType/ActionType';
import { SAVE_EMAIL_AT } from '../actionType/ActionType';
import { SAVE_PASSWORD_AT } from '../actionType/ActionType';
import { SAVE_FIELD_VALIDATION_ERRORS_EMAIL_AT } from '../actionType/ActionType';
import { SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT } from '../actionType/ActionType';
import { SET_SPINNING_AT } from '../actionType/ActionType';

export function Reducers( state, action ) {

    console.log( "\nREDUCERS TOP     action = ", action);
    console.log( "REDUCERS TOP      state = ", state);

    switch ( action.type ) {
        case SET_FORM_VALIDITY_AT:
            return Object.assign( { }, state, {
                formValidity: action.formValidity
          }
        )
        case SET_PASSWORD_VALIDITY_AT:
            return Object.assign( { }, state, {
                passwordValidity: action.passwordValidity
          }
        )
        case SET_EMAIL_VALIDITY_AT:
            return Object.assign({}, state, {
                emailValidity: action.emailValidity
          }
        )
        case SET_LOGGEDIN_STATUS_AT:
            return Object.assign( { }, state, {
                loggedInStatus: action.loggedInStatusParm
          }
        )
        case SAVE_EMAIL_AT:
            return Object.assign( { }, state, {
                email: action.email
          }
        )
        case SAVE_PASSWORD_AT:
            return Object.assign( { }, state, {
                password: action.password
          }
        )
        case SAVE_FIELD_VALIDATION_ERRORS_EMAIL_AT:
            return Object.assign( { }, state, {
                saveFieldValidationErrorsEmail: action.saveFieldValidationErrorsEmail
          }
        )
        case SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT:
            return Object.assign( { }, state, {
                saveFieldValidationErrorsPassword: action.saveFieldValidationErrorsPassword
          }
        )
        case SET_SPINNING_AT:
            return Object.assign( { }, state, {
                spinning: action.spinning
          }
        )
        default: return state;
    }
}