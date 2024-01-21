import { MoodScreen } from 'app/features/mood/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <MoodScreen />
    </>
  )
}
