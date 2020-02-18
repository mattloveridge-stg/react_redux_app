import { SET_SPINNING_AT } from '../actionType/ActionType';

export default function setSpinningCreator ( spinning ) {

  console.log("\nSETSPINNINGCREATOR spinning = ", spinning);

  return {
     type: SET_SPINNING_AT,
     spinning: spinning
   }
}
