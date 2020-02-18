import { SET_FORM_VALIDITY_AT } from '../actionType/ActionType';

export default function setFormValidityCreator ( trueFalse ) {

  console.log("\nsetFormValidityCreator trueFalse = ", trueFalse);

  return {
     type: SET_FORM_VALIDITY_AT,
     formValidity: trueFalse
   }
}
