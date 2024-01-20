import { Anchor, Button, H2, Paragraph, ScrollView, Separator, Theme, XStack, YStack } from '@my/ui'
import React, { useState } from 'react'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'

export function PushNotificationScreen() {
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
    <YStack style={{ flex: 1 }}>
      <ScrollView
        onContentSizeChange={handleContentSizeChange}
        onLayout={handleScrollViewLayout}
        scrollEnabled={isScrollingEnabled}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
      >
        <H2 p={20}>Push Notification Settings</H2>
      </ScrollView>
    </YStack>
  )
}
