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

export function TermsOfServiceScreen() {
  const [contentHeight, setContentHeight] = useState(0)
  const [scrollViewHeight, setScrollViewHeight] = useState(0)
  const scheme = useColorScheme()

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
        <H3>OMW Mobile App - Terms of Service</H3>
        <Paragraph>
          By using the OMW mobile application the "App", you agree to comply with and be bound by
          the following terms of service. Please review the terms carefully before using the App.
        </Paragraph>
        <H3>1. Acceptance of Terms</H3>
        <Paragraph>
          By accessing or using the App, you agree to these terms of service and all applicable laws
          and regulations. If you do not agree with any of these terms, you are prohibited from
          using or accessing the App.
        </Paragraph>
        <H3>2. Use License</H3>
        <Paragraph>
          Permission is granted to download and use the App solely for your personal, non-commercial
          use. This is the grant of a license, not a transfer of title, and under this license, you
          may not:
        </Paragraph>
        <Paragraph>- modify or copy the App;</Paragraph>
        <Paragraph>- use the App for any commercial purpose or for any public display;</Paragraph>
        <Paragraph>
          - attempt to decompile or reverse engineer any software contained in the App;
        </Paragraph>
        <Paragraph>
          - remove any copyright or other proprietary notations from the App; or
        </Paragraph>
        <Paragraph>
          - transfer the App to another person or "mirror" the App on any other server.
        </Paragraph>
        <H3>3. Disclaimer</H3>
        <Paragraph>
          The App is provided "as is." OMW makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties, including without limitation, implied
          warranties or conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of rights.
        </Paragraph>
        <H3>4. Limitations</H3>
        <Paragraph>
          In no event shall OMW or its suppliers be liable for any damages arising out of the use or
          inability to use the App, even if OMW or a OMW authorized representative has been notified
          orally or in writing of the possibility of such damage.
        </Paragraph>
        <H3>5. Governing Law</H3>
        <Paragraph>
          Any claim relating to the App shall be governed by the laws of [Your Country/State],
          without regard to its conflict of law provisions.
        </Paragraph>
        <H3>6. Changes to Terms</H3>
        <Paragraph>
          OMW reserves the right to revise these terms of service at any time without notice. By
          using the App, you are agreeing to be bound by the then-current version of these terms of
          service.
        </Paragraph>
        <H3>Contact Information</H3>
        <Paragraph>
          If you have any questions about these Terms of Service, please contact us at
          support@omwapp.com.
        </Paragraph>
      </YStack>
    </ScrollView>
  )
}
