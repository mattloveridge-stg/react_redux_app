import { SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT } from '../actionType/ActionType';

export default function saveFieldValidationErrorsPasswordCreator ( errorMessage ) {

  console.log("\nSAVE_FIELD_VALIDATION_ERRORS_PASSWORD_CREATOR       errorMessage = ", errorMessage);

  return {
     type: SAVE_FIELD_VALIDATION_ERRORS_PASSWORD_AT,
     saveFieldValidationErrorsPassword: errorMessage
   }
}

