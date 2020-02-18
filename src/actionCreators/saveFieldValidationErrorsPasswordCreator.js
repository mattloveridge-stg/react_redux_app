import { SAVE_FIELD_VALIDATION_ERRORS_EMAIL } from '../actionType/ActionType';

export default function saveFieldValidationErrorsEmailCreator ( errorMessage ) {

  console.log("\nSAVE_FIELD_VALIDATION_ERRORS_EMAIL_CREATOR errorMessage = ", errorMessage);

  return {
     type: SAVE_FIELD_VALIDATION_ERRORS_EMAIL,
     errorMessageEmail: errorMessage
   }
}
