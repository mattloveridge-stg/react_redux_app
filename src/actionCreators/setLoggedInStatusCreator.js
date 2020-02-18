import { SET_LOGGEDIN_STATUS_AT } from '../actionType/ActionType';

export default function setLoggedInStatusCreator ( loggedInStatusIncoming ) {

    return {
        type: SET_LOGGEDIN_STATUS_AT,
        loggedInStatusParm: loggedInStatusIncoming
    }
}