import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { THEME } from '../theme/theme'
import { AppTextBold } from './AppTextBold'

type Props = {
  title: string
}

export const Navbar: React.FC<Props> = ({ title }) => {
  return (
    <View
      style={{ ...styles.navbar, ...Platform.select<any>({ ios: styles.navbarIOS, android: styles.navbarAndroid }) }}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR
  },
  navbarIOS: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1
  },
  text: {
    fontSize: 24,
    color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'
  }
})
