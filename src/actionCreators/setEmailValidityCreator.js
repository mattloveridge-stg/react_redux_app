import { SET_EMAIL_VALIDITY_AT } from '../actionType/ActionType';

export default function setEmailValidityCreator ( trueFalse ) {

//  console.log("\nsetEmailValidityCreator trueFalse = ", trueFalse);

  return {
     type: SET_EMAIL_VALIDITY_AT,
     emailValidity: trueFalse
   }
}
