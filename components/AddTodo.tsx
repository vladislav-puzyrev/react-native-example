import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View, Keyboard } from 'react-native'
import { THEME } from '../theme/theme'
import { AntDesign } from '@expo/vector-icons'

type PropsType = {
  onSubmit: (title: string) => void
}

export const AddTodo: React.FC<PropsType> = ({ onSubmit }) => {
  const [text, setText] = useState('')
  const handlePress = () => {
    if (text.trim()) {
      onSubmit(text)
      setText('')
      Keyboard.dismiss()
    } else {
      Alert.alert('Ошибка', 'Название дела не может быть пустым.')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Введите название'
        onChangeText={setText}
        value={text}
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='default'
        onSubmitEditing={handlePress}
      />
      <AntDesign.Button onPress={handlePress} name='pluscircleo'>
        Добавить
      </AntDesign.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20
  },
  input: {
    width: '60%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    paddingHorizontal: 10
  }
})
