import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  GestureResponderEvent
} from 'react-native'
import { AppTextBold } from './AppTextBold'
import { THEME } from '../theme/theme'

type PropsType = {
  onPress: (e: GestureResponderEvent) => void
  color?: string
}

export const AppButton: React.FC<PropsType> = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    // @ts-ignore
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={styles.text}>{children}</AppTextBold>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  }
})
