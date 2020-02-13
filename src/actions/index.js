import * as types from '../constants/ActionTypes'

export const setSignedInStatusAction = ( status ) => ( {
    type: types.SET_SIGNEDIN_STATUS, status } )

export const saveEmailAction = ( newEmail ) => ( {
    type: types.SAVE_EMAIL, newEmail } )

