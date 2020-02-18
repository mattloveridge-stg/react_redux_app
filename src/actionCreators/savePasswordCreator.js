import { SAVE_PASSWORD_AT } from '../actionType/ActionType';

export default function savePasswordCreator ( password ) {

  console.log("SAVEPASSWORDCREATOR email = ", password);

  return {
     type: SAVE_PASSWORD_AT,
     password: password
   }
}
