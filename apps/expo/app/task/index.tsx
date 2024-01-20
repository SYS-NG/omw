import { TaskScreen } from 'app/features/task/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <TaskScreen />
    </>
  )
}
