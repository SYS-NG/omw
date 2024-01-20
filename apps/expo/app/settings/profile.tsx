import { ProfileScreen } from 'app/features/settings/profile'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Profile',
        }}
      />
      <ProfileScreen />
    </>
  )
}
