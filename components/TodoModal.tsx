import React, { useState } from 'react'
import { Alert, Button, Modal, StyleSheet, TextInput, View } from 'react-native'
import { THEME } from '../theme/theme'
import { TodoType } from '../types/types'
import { AppButton } from './AppButton'

type PropsType = {
  visible: boolean
  onCancel: () => void
  onSave: (id: string, title: string) => void
  todo: TodoType
}

export const TodoModal: React.FC<PropsType> = ({ visible, onCancel, todo, onSave }) => {
  const [text, setText] = useState(todo.title)

  const handleSave = () => {
    const textLength = text.trim().length
    if (textLength < 3) {
      Alert.alert('Ошибка', `Минимальная длина название 3 символа. Сейчас ${textLength} символа.`)
    } else {
      onSave(todo.id, text)
      onCancel()
    }
  }

  return (
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.container}>
        <TextInput onChangeText={setText} value={text} style={styles.input} placeholder='Введите название'/>
        <View style={styles.buttons}>
          <View>
            <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
              Отменить
            </AppButton>
          </View>
          <View>
            <AppButton onPress={handleSave}>
              Сохранить
            </AppButton>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%'
  },
  button: {
    width: '50%'
  },
  input: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 20
  }
})
