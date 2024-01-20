import { useEffect, useState } from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { SplashScreen } from 'expo-router'
import { Tabs } from 'expo-router/tabs'
import { useColorScheme } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

SplashScreen.preventAutoHideAsync()

export default function HomeLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <Provider>
      <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Tabs
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, size }) => {
              let iconName
              if (route.name === 'task') {
                iconName = focused ? 'ios-stats-chart' : 'ios-stats-chart-outline'
              } else if (route.name === 'therapist') {
                iconName = focused ? 'ios-log-in' : 'ios-log-in-outline'
              } else if (route.name === 'ai-chat') {
                iconName = focused ? 'ios-settings' : 'ios-settings-outline'
              } else if (route.name === 'settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline'
              }
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={
                    scheme === 'dark'
                      ? focused
                        ? DefaultTheme.colors.background
                        : DefaultTheme.colors.border
                      : focused
                      ? DarkTheme.colors.background
                      : DefaultTheme.colors.border
                  }
                />
              )
            },
            tabBarActiveTintColor:
              scheme === 'dark' ? DefaultTheme.colors.background : DarkTheme.colors.background,
          })}
        >
          <Tabs.Screen name="task" options={{ title: 'Task', href: '/task' }} />
          <Tabs.Screen name="therapist" options={{ title: 'Therapist', href: '/therapist' }} />
          <Tabs.Screen name="ai-chat" options={{ title: 'AI Chat', href: '/ai-chat' }} />
          <Tabs.Screen name="settings" options={{ title: 'Settings', href: '/settings' }} />
          <Tabs.Screen name="user/[id]" options={{ title: 'User', href: null }} />
          <Tabs.Screen name="splash" options={{ title: 'Splash', href: null }} />
          {/* Using as workaround to initialRouteName redirect */}
          <Tabs.Screen name="index" options={{ title: 'Index', href: null }} />
        </Tabs>
      </ThemeProvider>
    </Provider>
  )
}
