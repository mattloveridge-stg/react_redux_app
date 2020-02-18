import { SAVE_FIELD_VALIDATION_ERRORS } from '../actionType/ActionType';

export default function saveFieldvalidationErrorsCreator ( type, errorMessage ) {

  console.log("saveFieldvalidationErrors type = ", type);
  console.log("saveFieldvalidationErrors errorMessage = ", errorMessage);

  return {
     type: SAVE_FIELD_VALIDATION_ERRORS,
     type: type,
     errorMessage: errorMessage
   }
}
