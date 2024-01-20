import { PaymentSettingsScreen } from 'app/features/settings/payment-method'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Payment Settings',
        }}
      />
      <PaymentSettingsScreen />
    </>
  )
}
