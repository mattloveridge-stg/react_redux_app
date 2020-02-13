import { SET_SIGNEDIN_STATUS } from '../actionType/ActionType';
import { SAVE_EMAIL } from '../actionType/ActionType';

const Reducers = ( state, action ) => {

    console.log( "signedInStatusReducer state = ", state);
    console.log( "signedInStatusReducer action = ", action);
    console.log( "signedInStatusReducer ActionType.SAVE_EMAIL = ", SAVE_EMAIL);
    console.log( "signedInStatusReducer action.type !== ActionType.SAVE_EMAIL", action.type !== SAVE_EMAIL);

    switch ( action.type ) {
        case SET_SIGNEDIN_STATUS:
            return {
                state,
                signedInStatus: action.status
            };
        case SAVE_EMAIL:
            return {
                state,
                saveEmail: action.email
            };
        default:
            return state
    };
}
export default Reducers;
