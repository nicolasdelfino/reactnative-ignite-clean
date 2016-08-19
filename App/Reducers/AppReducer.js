import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  something:null
})

// successful logins
const example = (state, action) =>
  state.merge({ something: action.something })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SOMETHING]: example,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
