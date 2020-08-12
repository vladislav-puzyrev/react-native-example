import React, { useContext, useReducer } from 'react'
import { todoContext, initialState } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../constants'
import { Alert } from 'react-native'
import { screenContext } from '../screen/screenContext'

export const TodoState: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const { changeScreen } = useContext(screenContext)

  const addTodo = (title: string) => dispatch({ type: ADD_TODO, title })
  const removeTodo = (id: string) => {
    const todo = state.todos.find(todo => todo.id === id) as any

    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        { text: 'Отмена', style: 'cancel' },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            changeScreen(null)
            dispatch({ type: REMOVE_TODO, id })
          }
        }
      ],
      { cancelable: false }
    )
  }

  const updateTodo = (id: string, title: string) => dispatch({ type: UPDATE_TODO, id, title })

  return (
    <todoContext.Provider value={{ todos: state.todos, addTodo, removeTodo, updateTodo }}>
      {children}
    </todoContext.Provider>
  )
}
