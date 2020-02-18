import { SET_LOGGEDIN_STATUS_AT } from '../actionType/ActionType';

export default function setLoggedInStatusCreator ( loggedInStatusParm ) {

    return {
        type: SET_LOGGEDIN_STATUS_AT,
        loggedInStatus: loggedInStatusParm
    }
}