import { SAVE_EMAIL } from '../actionType/ActionType';

export default function saveEmailCreator ( email ) {

  console.log("SAVEEMAILCREATOR email = ", email);

  return {
     type: SAVE_EMAIL,
     email: email
   }
}
