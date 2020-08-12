import { createContext } from 'react'

export const initialState = {
  todoId: null as null | string,
  changeScreen: (id: string | null) => {}
}
export type StateType = typeof initialState
export const screenContext = createContext(initialState)
