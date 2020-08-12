import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Main } from './components/Main'
import { TodoState } from './context/todo/TodoState'
import { ScreenState } from './context/screen/ScreenState'

const loadFonts = async () => {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default () => {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={(err) => console.log(err)}
    />
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios'}
      style={{ flex: 1 }}
    >
      <ScreenState>
        <TodoState>
          <Main/>
        </TodoState>
      </ScreenState>
    </KeyboardAvoidingView>
  )
}
