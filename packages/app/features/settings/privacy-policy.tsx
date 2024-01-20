import {
  Anchor,
  Button,
  H2,
  H3,
  Paragraph,
  ScrollView,
  Separator,
  Theme,
  XStack,
  YStack,
} from '@my/ui'
import React, { useState } from 'react'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

export function PrivacyPolicyScreen() {
  const [contentHeight, setContentHeight] = useState(0)
  const [scrollViewHeight, setScrollViewHeight] = useState(0)

  const handleContentSizeChange = (_contentWidth, height) => {
    setContentHeight(height)
  }

  const handleScrollViewLayout = (event) => {
    setScrollViewHeight(event.nativeEvent.layout.height)
  }

  const isScrollingEnabled = contentHeight > scrollViewHeight

  return (
    <ScrollView
      onContentSizeChange={handleContentSizeChange}
      onLayout={handleScrollViewLayout}
      scrollEnabled={isScrollingEnabled}
    >
      <YStack space="$2" p="$2" jc={'center'}>
        <H3>Privacy Policy for OMW</H3>
        <Paragraph>
          This Privacy Policy describes how your personal information is collected, used, and shared
          when you use the OMW mobile application (the "App").
        </Paragraph>
        <H3>Information We Collect</H3>
        <Paragraph>
          When you use the App, we may collect certain information about you, including:
        </Paragraph>
        <Paragraph>
          - The personal information you provide when using features such as creating and managing
          omws.
        </Paragraph>
        <Paragraph>
          - Usage and device information, including but not limited to your device's IP address,
          operating system, and browser type.
        </Paragraph>
        <H3>How We Use Your Information</H3>
        <Paragraph>We use the information collected to:</Paragraph>
        <Paragraph>- Provide and maintain the App's functionality.</Paragraph>
        <Paragraph>- Improve and optimize the App's performance.</Paragraph>
        <Paragraph>- Send you important updates and communications regarding the App.</Paragraph>
        <H3>Sharing Your Information</H3>
        <Paragraph>
          We may share your personal information with third parties only in the following
          circumstances:
        </Paragraph>
        <Paragraph>- With your consent.</Paragraph>
        <Paragraph>- To comply with legal obligations.</Paragraph>
        <H3>Your Choices</H3>
        <Paragraph>
          You have the right to access and correct your personal information or request its
          deletion. You may do so by contacting us at [contact@email.com].
        </Paragraph>
        <H3>Security</H3>
        <Paragraph>
          We take reasonable precautions to protect your information. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </Paragraph>
        <H3>Changes to This Privacy Policy</H3>
        <Paragraph>
          We may update this Privacy Policy from time to time to reflect changes to our practices or
          for other operational, legal, or regulatory reasons.
        </Paragraph>
        <H3>Contact Us</H3>
        <Paragraph>
          If you have any questions about this Privacy Policy, please contact us at
          [contact@email.com].
        </Paragraph>
      </YStack>
    </ScrollView>
  )
}
