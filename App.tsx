import React, { useState } from 'react'
import { Alert, StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { TodoType } from './types/types'

const loadFonts = async () => {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default () => {
  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null as null | string)
  const [todos, setTodos] = useState([{ id: '1', title: 'Выучить react native' }] as TodoType[])

  if (!isReady) {
    return <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={(err) => console.log(err)}
    />
  }

  const addTodo = (title: string) => setTodos(prevTodos => [...prevTodos, { id: Date.now().toString(), title }])
  const removeTodo = (id: string) => {
    const todo = todos.find(todo => todo.id === id) as TodoType

    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        { text: 'Отмена', style: 'cancel' },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
          }
        }
      ],
      { cancelable: false }
    )
  }
  const changeTodo = (id: string, title: string) => {
    setTodos(todos => todos.map(todo => (
      todo.id === id
        ? { id, title }
        : todo
    )))
  }

  const content = todoId
    ? <TodoScreen
      goBack={() => setTodoId(null)}
      todo={todos.find(todo => todo.id === todoId) as TodoType}
      removeTodo={removeTodo}
      changeTodo={changeTodo}
    />
    : <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId}/>

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >

      <View style={styles.container}>
        <Navbar title='Список дел'/>
        <View style={styles.content}>
          {content}
        </View>
      </View>

    </KeyboardAvoidingView>
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
