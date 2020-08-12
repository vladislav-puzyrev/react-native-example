import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { TodoType } from '../types/types'
import { AppText } from './AppText'

type PropsType = {
  todo: TodoType
  onRemove: (id: string) => void
  onOpen: (id: string) => void
}

export const Todo: React.FC<PropsType> = ({ todo, onRemove, onOpen }) => {

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5
  }
})
