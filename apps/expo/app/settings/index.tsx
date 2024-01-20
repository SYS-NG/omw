import { SettingsScreen } from 'app/features/settings/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SettingsScreen />
    </>
  )
}
