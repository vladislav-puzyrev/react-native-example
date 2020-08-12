import React, { useContext } from 'react'
import { Navbar } from './Navbar'
import { StyleSheet, View } from 'react-native'
import { TodoScreen } from '../screens/TodoScreen'
import { MainScreen } from '../screens/MainScreen'
import { screenContext } from '../context/screen/screenContext'

export const Main = () => {
  const { todoId } = useContext(screenContext)

  // const addTodo = (title: string) => setTodos(prevTodos => [...prevTodos, { id: Date.now().toString(), title }])
  // const removeTodo = (id: string) => {
  //   const todo = todos.find(todo => todo.id === id) as TodoType
  //
  //   Alert.alert(
  //     'Удаление элемента',
  //     `Вы уверены, что хотите удалить "${todo.title}"?`,
  //     [
  //       { text: 'Отмена', style: 'cancel' },
  //       {
  //         text: 'Удалить',
  //         style: 'destructive',
  //         onPress: () => {
  //           setTodoId(null)
  //           setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  //         }
  //       }
  //     ],
  //     { cancelable: false }
  //   )
  // }
  // const changeTodo = (id: string, title: string) => {
  //   setTodos(todos => todos.map(todo => (
  //     todo.id === id
  //       ? { id, title }
  //       : todo
  //   )))
  // }

  return (
    <View style={styles.container}>
      <Navbar title='Список дел'/>
      <View style={styles.content}>
        {todoId ? <TodoScreen/> : <MainScreen/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 20,
    flex: 1
  }
})
