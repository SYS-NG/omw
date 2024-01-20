import {
  Anchor,
  Button,
  Text,
  Label,
  Paragraph,
  ScrollView,
  Separator,
  Theme,
  XStack,
  YStack,
  Input,
  Avatar,
  AlertDialog,
} from '@my/ui'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'

export function ProfileScreen() {
  const [contentHeight, setContentHeight] = useState(0)
  const [scrollViewHeight, setScrollViewHeight] = useState(0)
  const [username] = useState('jordan@omw.com')
  const [firstName] = useState('Michael')
  const [lastName] = useState('Jordan')

  const handleContentSizeChange = (_contentWidth, height) => {
    setContentHeight(height)
  }

  const handleScrollViewLayout = (event) => {
    setScrollViewHeight(event.nativeEvent.layout.height)
  }

  const isScrollingEnabled = contentHeight > scrollViewHeight

  const avatarHandleOnPress = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' })
    console.log('here')
  }

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
        <YStack pt={20} pl={10} space>
          <XStack alignSelf="center" space="$6">
            <AlertDialog native>
              <AlertDialog.Trigger asChild>
                <Avatar circular size="$13">
                  <Avatar.Image
                    accessibilityLabel="ProfileImage"
                    src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?&w=150&h=150&dpr=2&q=80"
                  />
                  <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay />
                <AlertDialog.Content>
                  <YStack space>
                    <AlertDialog.Title>Update Profile Image</AlertDialog.Title>
                    <AlertDialog.Description>
                      What do you want to do with your profile image?
                    </AlertDialog.Description>
                    <XStack space="$3" justifyContent="flex-end">
                      <AlertDialog.Cancel asChild>
                        <Button>Cancel</Button>
                      </AlertDialog.Cancel>
                      <AlertDialog.Action onPress={avatarHandleOnPress} asChild>
                        <Button theme="active">Choose</Button>
                      </AlertDialog.Action>
                    </XStack>
                  </YStack>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog>
          </XStack>
          <YStack>
            <Label size={'$2'} opacity={0.5}>
              USERNAME
            </Label>
            <Text fontSize={'$5'} opacity={0.8}>
              {username}
            </Text>
          </YStack>
          <YStack>
            <Label size={'$2'} opacity={0.5}>
              FIRST NAME
            </Label>
            <Input bw={0}>{firstName}</Input>
          </YStack>

          <YStack>
            <Label size={'$2'} opacity={0.5}>
              LAST NAME
            </Label>
            <Input bw={0}>{lastName}</Input>
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  )
}
