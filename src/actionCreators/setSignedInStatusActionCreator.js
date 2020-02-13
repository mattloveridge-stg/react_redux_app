import { SET_SIGNEDIN_STATUS } from '../actionType/ActionType';

export default function setSignedInStatusActionCreator ( signedInStatus ) {

    return {
        type: SET_SIGNEDIN_STATUS,
        status: signedInStatus
    }
}