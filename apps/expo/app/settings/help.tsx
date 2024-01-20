import { HelpScreen } from 'app/features/settings/help'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Help',
        }}
      />
      <HelpScreen />
    </>
  )
}
