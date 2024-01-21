import { TherapistDetailScreen } from 'app/features/therapist/detailScreen'
import { Stack } from 'expo-router'
import { createParam } from 'solito'

const { useParam } = createParam<{ full_name: string }>()

export default function Screen() {
  const [fullName] = useParam('full_name')
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: fullName,
        }}
      />
      <TherapistDetailScreen />
    </>
  )
}
