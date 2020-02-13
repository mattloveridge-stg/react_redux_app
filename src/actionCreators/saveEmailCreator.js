import ActionType from '../actionType/ActionType';

export default function saveEmailCreator ( email ) {

  console.log("saveEmailCreator email);

  return {
     type: ActionType.SAVE_EMAIL
     email: email
   }
}