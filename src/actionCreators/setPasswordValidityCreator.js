import { SET_PASSWORD_VALIDITY_AT } from '../actionType/ActionType';

export function setPasswordValidityCreator ( trueFalse ) {

  console.log("\nsetPasswordValidityCreator trueFalse = ", trueFalse);

  return {
     type: SET_PASSWORD_VALIDITY_AT,
     passwordValidity: trueFalse
   }
}
