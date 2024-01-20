import { TermsOfServiceScreen } from 'app/features/settings/terms-of-service'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Terms of Service',
        }}
      />
      <TermsOfServiceScreen />
    </>
  )
}
