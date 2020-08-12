import { StateType } from './screenContext'
import { CHANGE_SCREEN } from '../constants'

export const screenReducer = (state: StateType, action: any) => {
  switch (action.type) {
    case CHANGE_SCREEN:
      return {
        ...state,
        todoId: action.payload
      }

    default:
      return state
  }
}
