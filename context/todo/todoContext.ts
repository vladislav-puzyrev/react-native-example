import { createContext } from 'react'

export const initialState = {
  todos: [{ id: '1', title: 'Выучить react native!' }],
  addTodo: (title: string) => {},
  removeTodo: (id: string) => {},
  updateTodo: (id: string, title: string) => {}
}
export type StateType = typeof initialState
export const todoContext = createContext(initialState)
