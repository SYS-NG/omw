import {
  Anchor,
  Avatar,
  Button,
  H2,
  Paragraph,
  ScrollView,
  Separator,
  Text,
  Theme,
  XGroup,
  XStack,
  YStack,
} from '@my/ui'
import {
  BookText,
  ChevronRight,
  Heart,
  HelpCircle,
  Mail,
  User,
  UserCog,
  WalletCards,
  Lock,
  Smartphone,
} from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { useLink } from 'solito/link'

export function SettingsScreen() {
  const [contentHeight, setContentHeight] = useState(0)
  const [scrollViewHeight, setScrollViewHeight] = useState(0)
  const scheme = useColorScheme()
  const insets = useSafeAreaInsets()

  const handleContentSizeChange = (_contentWidth, height) => {
    setContentHeight(height)
  }

  const handleScrollViewLayout = (event) => {
    setScrollViewHeight(event.nativeEvent.layout.height)
  }

  const isScrollingEnabled = contentHeight > scrollViewHeight

  const profileLink = useLink({
    href: '/settings/profile',
  })
  const privacyPolicyProps = useLink({
    href: '/settings/privacy-policy',
  })
  const termsOfServiceProps = useLink({
    href: '/settings/terms-of-service',
  })
  const paymentMethodsProps = useLink({
    href: '/settings/payment-method',
  })
  const pushNotificationProps = useLink({
    href: '/settings/push-notification',
  })
  const emailConfigProps = useLink({
    href: '/settings/email-config',
  })
  const contactScreenProps = useLink({
    href: '/settings/contact-support',
  })
  const helpScreenProps = useLink({
    href: '/settings/help',
  })

  return (
    <SafeAreaProvider>
      <YStack style={{ flex: 1, paddingTop: insets.top }}>
        <ScrollView
          onContentSizeChange={handleContentSizeChange}
          onLayout={handleScrollViewLayout}
          scrollEnabled={isScrollingEnabled}
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll={true}
          showsVerticalScrollIndicator={false}
        >
          <H2
            p={20}
          >
            Settings
          </H2>
          {/* Account */}
          <Text fontFamily={ 'Poppins_400Regular'} fontSize={'$1'} color={'darkgray'} pt={20} pb={5} pl={20}>
            Account
          </Text>
          <XGroup borderRadius={0} orientation="vertical">
            <XGroup.Item>
              <Button
                h="$5"
                fontSize="$4"
                // jc={'space-between'}
                {...profileLink}
                iconAfter={ChevronRight}
                icon={User}
                spaceFlex
                textAlign="left"
              >
                <Text fontFamily={ 'Poppins_500Medium'} fontWeight={'500'} fontSize={'$4'} w={'85%'}>
                  Profile
                </Text>
              </Button>
            </XGroup.Item>
            <XGroup.Item>
              <Button
                h="$5"
                fontSize="$4"
                jc={'space-between'}
                {...paymentMethodsProps}
                iconAfter={ChevronRight}
                icon={WalletCards}
              >
                <Text fontFamily={ 'Poppins_500Medium'} fontWeight={'500'} fontSize={'$4'} w={'85%'}>
                  Payment Methods
                </Text>
              </Button>
            </XGroup.Item>
          </XGroup>
          {/* Notification */}
          <Text fontFamily={ 'Poppins_400Regular'}  fontSize={'$1'} color={'darkgray'} paddingTop={20} pb={5} pl={20}>
            Notification
          </Text>
          <XGroup borderRadius={0} orientation="vertical">
            <XGroup.Item>
              <Button
                h="$5"
                fontSize="$4"
                jc={'space-between'}
                {...pushNotificationProps}
                iconAfter={ChevronRight}
                icon={Smartphone}
              >
                <Text fontFamily={ 'Poppins_500Medium'} fontWeight={'500'} fontSize={'$4'} w={'85%'}>
                  Push Notifications
                </Text>
              </Button>
            </XGroup.Item>
            <XGroup.Item>
              <Button
                h="$5"
                fontSize="$4"
                jc={'space-between'}
                {...emailConfigProps}
                iconAfter={ChevronRight}
                icon={Mail}
              >
                <Text fontFamily={ 'Poppins_500Medium'} fontWeight={'500'} fontSize={'$4'} w={'85%'}>
                  Email
                </Text>
              </Button>
            </XGroup.Item>
          </XGroup>
          {/* Support */}
          <Text fontFamily={ 'Poppins_400Regular'} fontSize={'$1'} color={'darkgray'} paddingTop={20} pb={5} pl={20}>
            Support
          </Text>
          <XGroup borderRadius={0} orientation="vertical">
            <XGroup.Item>
              <Button
                h="$5"
                fontSize="$4"
                jc={'space-between'}
                {...contactScreenProps}
                iconAfter={ChevronRight}
                icon={UserCog}
              >
                <Text fontFamily={ 'Poppins_500Medium'} fontWeight={'500'} fontSize={'$4'} w={'85%'}>
                  Contact
                </Text>
              </Button>
            </XGroup.Item>
            <XGroup.Item>
              <Button
                h="$5"
                fontSize="$4"
                jc={'space-between'}
                {...helpScreenProps}
                iconAfter={ChevronRight}
                icon={HelpCircle}
              >
                <Text fontFamily={ 'Poppins_500Medium'} fontWeight={'500'} fontSize={'$4'} w={'85%'}>
                  Help
                </Text>
              </Button>
            </XGroup.Item>
            <XGroup.Item>
              <Button
                h="$5"
                fontSize="$4"
                jc={'space-between'}
                {...termsOfServiceProps}
                iconAfter={ChevronRight}
                icon={BookText}
              >
                <Text fontFamily={ 'Poppins_500Medium'} fontWeight={'500'} fontSize={'$4'} w={'85%'}>
                  Terms of Service
                </Text>
              </Button>
            </XGroup.Item>
            <XGroup.Item>
              <Button
                h="$5"
                fontSize="$4"
                jc={'space-between'}
                {...privacyPolicyProps}
                iconAfter={ChevronRight}
                icon={Lock}
              >
                <Text fontFamily={ 'Poppins_500Medium'} fontWeight={'500'} fontSize={'$4'} w={'85%'}>
                  Privacy Policy
                </Text>
              </Button>
            </XGroup.Item>
          </XGroup>
        </ScrollView>
        <Paragraph
          opacity={0.5}
          w={'100%'}
          pos={'absolute'}
          ai={'center'}
          ta={'center'}
          bottom={10}
          fontStyle="italic"
          selectable={false}
          fontFamily={ 'Poppins_500Medium'} 
        >
          Made with{' '}
          <Heart color={'red'} fill={'red'} />{' '}
          at nwHacks '24!
        </Paragraph>
      </YStack>
    </SafeAreaProvider>
  )
}
