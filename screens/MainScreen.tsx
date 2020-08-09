import React, { useState, useEffect } from 'react'
import { FlatList, Image, ListRenderItemInfo, StyleSheet, View, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { TodoType } from '../types/types'

type PropsType = {
  todos: TodoType[]
  addTodo: (title: string) => void
  removeTodo: (id: string) => void
  openTodo: (id: string) => void
}

export const MainScreen: React.FC<PropsType> = ({ addTodo, todos, removeTodo, openTodo }) => {
  const [todoWidth, setTodoWidth] = useState(Dimensions.get('window').width - 40)

  useEffect(() => {
    const update = () => setTodoWidth(Dimensions.get('window').width - 40)

    Dimensions.addEventListener('change', update)
    return () => Dimensions.removeEventListener('change', update)
  }, [setTodoWidth])

  const content = todos.length
    ? <View style={{ flex: 1, width: todoWidth }}>
      <FlatList
        data={todos}
        renderItem={
          ({ item }: ListRenderItemInfo<TodoType>) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
        }
      />
    </View>
    : <View style={styles.imageContainer}>
      <Image resizeMode='contain' style={styles.image} source={require('../assets/no-items.png')}/>
    </View>

  return (
    <View style={styles.container}>
      <AddTodo onSubmit={addTodo}/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300
  }
})
