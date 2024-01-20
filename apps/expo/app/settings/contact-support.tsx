import { ContactSupportScreen } from 'app/features/settings/contact-support'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Support',
        }}
      />
      <ContactSupportScreen />
    </>
  )
}
