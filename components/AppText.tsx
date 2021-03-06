import React from 'react'
import { StyleSheet, Text } from 'react-native'

type PropsType = {
  style?: any
}

export const AppText: React.FC<PropsType> = ({ children, style }) => {
  return <Text style={{ ...styles.default, ...style }}>{children}</Text>
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular'
  }
})
