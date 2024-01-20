import { PrivacyPolicyScreen } from 'app/features/settings/privacy-policy'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Privacy Policy',
        }}
      />
      <PrivacyPolicyScreen />
    </>
  )
}
