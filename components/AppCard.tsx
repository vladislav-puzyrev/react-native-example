import React from 'react'
import { StyleSheet, View } from 'react-native'

type PropsType = {
  styles?: Object
}

export const AppCard: React.FC<PropsType> = (props) => {
  return (
    <View style={{ ...styles.default, ...props.styles }}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 8
  }
})
