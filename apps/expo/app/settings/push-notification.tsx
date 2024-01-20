import { PushNotificationScreen } from 'app/features/settings/push-notification'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Push Notifications',
        }}
      />
      <PushNotificationScreen />
    </>
  )
}
