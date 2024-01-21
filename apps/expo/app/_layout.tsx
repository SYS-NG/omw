import { useEffect, useState } from 'react'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { SplashScreen } from 'expo-router'
import { Tabs } from 'expo-router/tabs'
import { useColorScheme } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins'

SplashScreen.preventAutoHideAsync()

export default function HomeLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
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
                iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline'
              } else if (route.name === 'therapist') {
                iconName = focused ? 'ios-man' : 'ios-man-outline'
              } else if (route.name === 'ai-chat') {
                iconName = focused ? 'chatbox' : 'chatbox-outline'
              } else if (route.name === 'settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline'
              } else if (route.name === 'mood') {
                iconName = focused ? 'add-circle' : 'add-circle-outline'
              }
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={focused ? '#EF4444' : DefaultTheme.colors.border}
                />
              )
            },
            tabBarActiveTintColor:
              scheme === 'dark' ? DefaultTheme.colors.background : DarkTheme.colors.background,
          })}
        >
          <Tabs.Screen
            name="task"
            options={{
              tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
              title: 'Tasks',
              href: '/task',
            }}
          />
          <Tabs.Screen
            name="therapist"
            options={{
              tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
              title: 'Therapist',
              href: '/therapist',
            }}
          />
          <Tabs.Screen
            name="mood"
            options={{
              tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
              title: 'Mood',
              href: '/mood',
            }}
          />
          <Tabs.Screen
            name="ai-chat"
            options={{
              tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
              title: 'OMW AI',
              href: '/ai-chat',
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
              title: 'Settings',
              href: '/settings',
            }}
          />
          <Tabs.Screen
            name="user/[id]"
            options={{
              tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
              title: 'User',
              href: null,
            }}
          />
          <Tabs.Screen
            name="splash"
            options={{
              tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
              title: 'Splash',
              href: null,
            }}
          />
          {/* Using as workaround to initialRouteName redirect */}
          <Tabs.Screen
            name="index"
            options={{
              tabBarLabelStyle: { fontFamily: 'Poppins_500Medium' },
              title: 'Index',
              href: null,
            }}
          />
        </Tabs>
      </ThemeProvider>
    </Provider>
  )
}
