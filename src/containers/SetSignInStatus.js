import React from 'react'
import { connect } from 'react-redux'
import { setSignInStatus } from '../actions'

const SetSignInStatus = ( { dispatch } ) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(setSignInStatus(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Set SignIn Status
        </button>
      </form>
    </div>
  )
}

export default connect()(SetSignInStatus)