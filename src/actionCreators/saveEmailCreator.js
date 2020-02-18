import { SAVE_EMAIL_AT } from '../actionType/ActionType';

export default function saveEmailCreator ( email ) {

  console.log("SAVEEMAILCREATOR email = ", email);

  return {
     type: SAVE_EMAIL_AT,
     email: email
   }
}
