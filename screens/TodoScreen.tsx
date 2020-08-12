import React, { useContext, useState } from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { THEME } from '../theme/theme'
import { AppCard } from '../components/AppCard'
import { TodoModal } from '../components/TodoModal'
import { AppTextBold } from '../components/AppTextBold'
import { AppButton } from '../components/AppButton'
import { todoContext } from '../context/todo/todoContext'
import { screenContext } from '../context/screen/screenContext'

export const TodoScreen = () => {
  const [modal, setModal] = useState(false)
  const { todos, removeTodo, updateTodo } = useContext(todoContext)
  const { todoId, changeScreen } = useContext(screenContext)
  const todo = todos.find(todo => todo.id === todoId) as any

  return (
    <View>
      <TodoModal onSave={updateTodo} todo={todo} visible={modal} onCancel={() => setModal(false)}/>

      <AppCard styles={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name='edit' size={20}/>
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={() => changeScreen(null)}>
            <AntDesign name='back' size={20} color='#fff'/>
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>
            <FontAwesome name='remove' size={20} color='#fff'/>
          </AppButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: +Dimensions.get('window').width / 2 - 30
    // width: +Dimensions.get('window').width > 400 ? 150 : 100
  },
  title: {
    fontSize: 20
  },
  card: {
    marginBottom: 20
  }
})
