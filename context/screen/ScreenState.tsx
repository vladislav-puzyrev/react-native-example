import React, { useReducer } from 'react'
import { screenReducer } from './screenReducer'
import { initialState, screenContext } from './screenContext'
import { CHANGE_SCREEN } from '../constants'

export const ScreenState: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, initialState)
  const changeScreen = (id: string) => dispatch({ type: CHANGE_SCREEN, payload: id })

  return (
    <screenContext.Provider value={{ todoId: state.todoId, changeScreen }}>
      {children}
    </screenContext.Provider>
  )
}
