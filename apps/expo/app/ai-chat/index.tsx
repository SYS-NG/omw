import { AiChatScreen } from 'app/features/ai-chat/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <AiChatScreen />
    </>
  )
}
