import { EmailConfigScreen } from 'app/features/settings/email-config'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Email Setup',
        }}
      />
      <EmailConfigScreen />
    </>
  )
}
