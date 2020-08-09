import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme/theme'
import { AppCard } from '../components/AppCard'
import { TodoModal } from '../components/TodoModal'
import { TodoType } from '../types/types'
import { AppTextBold } from '../components/AppTextBold'
import { AppButton } from '../components/AppButton'

type PropsType = {
  goBack: () => void
  todo: TodoType
  removeTodo: (id: string) => void
  changeTodo: (id: string, title: string) => void
}

export const TodoScreen: React.FC<PropsType> = ({ goBack, todo, removeTodo, changeTodo }) => {
  const [modal, setModal] = useState(false)

  return (
    <View>
      <TodoModal onSave={changeTodo} todo={todo} visible={modal} onCancel={() => setModal(false)}/>

      <AppCard styles={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name='edit' size={20}/>
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
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
