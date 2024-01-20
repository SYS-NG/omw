import { TherapistScreen } from 'app/features/therapist/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <TherapistScreen />
    </>
  )
}
