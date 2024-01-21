import { useState, useCallback, useEffect, forwardRef } from 'react'
import { 
  YGroup,
  H1, 
  H2, 
  YStack, 
  XStack, 
  Text, 
  Image, 
  Button, 
  Stack, 
  ScrollView, 
  Card, 
  ListItem,
  styled,
  themeable,
  useListItem, 
  Theme,
  Avatar,
  } from '@my/ui'
import { useColorScheme, RefreshControl, StyleSheet, View } from 'react-native'
import { useRouter } from 'solito/router'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { ChevronRight, Search, X } from '@tamagui/lucide-icons'

export type Article = {
  id: number
  title: string
  img_url: string
  content: string
}

export function MoodScreen() {
  const [refreshing, setRefreshing] = useState(false)
  const [image, setImage] = useState('https://s3-alpha-sig.figma.com/img/5b6f/64cb/c25dada9f9177cdb0e9018117ac58ba1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DhQQohemBn6iVK10mf39Yg0FYmY4tPuCNqzr66UkgBBk0ugiMFaLdZCRnt5hP8psaFZsy9CuLC8gnC2Q5xI2s-1BGdsDRTaC5lvVl8dsoeYJHZcJvgi-22yf3~6PGqAxQXeC8KkrWQooPK3Kwef4F~30olJ44JmctGRltAKoWLvmtjuUJN1zYl2iH3IMDeZ8jxxjGuEMpa4CwQnmZQsYqHlSBjd4LD-oiCeLSXzrW6wGw20lOj5kmnWMiMXP2sISAxbwGFGBniFW5r1m2wa2~itpLCBNwe2B-H-DUNfTs9S4L69nCXdkbS0QADpuvPhN7QBokYeQLtFupMy2vVgpHA__')
  const insets = useSafeAreaInsets()
  const moodBoard = require('../../../../apps/expo/assets/container.png')

  const setImageURI = (mood: string) => {
    switch(mood) {
      case 'Happy':
        setImage('https://s3-alpha-sig.figma.com/img/5b6f/64cb/c25dada9f9177cdb0e9018117ac58ba1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DhQQohemBn6iVK10mf39Yg0FYmY4tPuCNqzr66UkgBBk0ugiMFaLdZCRnt5hP8psaFZsy9CuLC8gnC2Q5xI2s-1BGdsDRTaC5lvVl8dsoeYJHZcJvgi-22yf3~6PGqAxQXeC8KkrWQooPK3Kwef4F~30olJ44JmctGRltAKoWLvmtjuUJN1zYl2iH3IMDeZ8jxxjGuEMpa4CwQnmZQsYqHlSBjd4LD-oiCeLSXzrW6wGw20lOj5kmnWMiMXP2sISAxbwGFGBniFW5r1m2wa2~itpLCBNwe2B-H-DUNfTs9S4L69nCXdkbS0QADpuvPhN7QBokYeQLtFupMy2vVgpHA__')
        break
      case 'Okay':
        setImage('https://s3-alpha-sig.figma.com/img/ff2a/dba3/da63e2b500665771e1c2721f4c89c8a6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k8ccFsyOxPZuqSxjRHb5bWE-h3IoCxPd5vv79qiwrxVfZQgMKVW3IABkTJCqbsFc4ivs7lLl57jtsLbm0kMdv3~NZVGJJV2vwHsEjgfqm8-xJJAsM717FMcZDtJIhCVaf0z212f84zAahyCn~O7ZEVoBFSvRkFEv3P8LopXiSL6HPLhTmK6jXjrqV2bPMuLh5ewSAQbBEI84uYS052aRZpU0~9HMP~lcR0GnmUd0sxk5mSl2kRGF~nMyzzTmDXN2U9NmcTAiUS6LMYF23jkyxpefWqHJ3vIc4w~5XeXfl3Iu-cOwExzoGjEgGxDZO-JqtsPB-HwNdsU7pxOdH5iYyQ__')
        break
      case 'Sad':
        setImage('https://s3-alpha-sig.figma.com/img/8906/9c6d/c2cd679e27b58046c451c81926d68062?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KkjkpyPPDlBDJXBlOl0GneYCzzgaq3VZe0jEsu6ijZUEUR6K5RCW-p-dCf1BNPR7OOIPUMnmHDkZ~UcH8he2jlnWY~lsZwUZbY-Ecy1Qf-8B0q4umEdvbA9rB5JsxpJ-hslTm4S00AyIO7--SzieuiwJp93Y9nEZhIIQqtgHhPR3vNkEntbIrjb7QTk0DHDDfnzdODkL5Ymu4nxqATznpgWI24ggZ9f8YZIDdbi5TAYb0IRPjm67PbrpHhJKgG-Xntsh~zm8S4SBFTNsH80u9s6NbNN8B0FY1WOOnYiTSF6Up6IbsQnmBYOxU8JXi36sf7P2kjqZ5ooKUt8L0nVbKQ__')
        break
    }
  }

  const fetchAllMoods = () => {
    return [
      {
        id: 1,
        name: 'Happy',
      },
      {
        id: 2,
        name: 'Okay',
      },
      {
        id: 3,
        name: 'Sad',
      },
    ]
  }

  const fetchAllArticles = () => {
    return [
      {
        id: 1,
        title: 'Understanding Anxiety',
        content: 'No specific genes have been found to actually cause an anxiety disorder...',
      },
      {
        id: 2,
        title: 'Managing Stress',
        content:'Managing stress is crucial for overall well-being. Here are effective strategies...',
      },
    ]
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <SafeAreaProvider>
      <YStack style={{
        flex: 1,
        paddingTop: insets.top,
      }}
      >
        <ScrollView
            automaticallyAdjustKeyboardInsets
            refreshControl={
              <RefreshControl
                title={refreshing ? 'Refreshing...' : 'Refresh!'}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            // stickyHeaderIndices={[0]}
            // stickyHeaderHiddenOnScroll={true}
          >
          <YStack f={1} jc="center" ai="center" p="$4" space>
            <YStack space="$6">
              <Image source={{
                  uri: image,
                  width: 200,
                  height: 200
                }} 
              />
              <H1 ta="left">Welcome!</H1>
              <Text ta="left">Hi, how are you feeling today?</Text>
            </YStack>

            <XStack flex={1} space="$4" max-width={100}>
              {fetchAllMoods().map((mood) => (
                <Button key={mood.id} theme="active" onPress={() => {setImageURI(mood.name)}}>
                  <Stack space="$3" ai="center">
                    <Text ta="center">{mood.name}</Text>
                  </Stack>
                </Button>
              ))}
            </XStack>

            <Card bordered paddingBottom={'$5'}>
              <Card.Header>
                <H2>Mood Level</H2>
              </Card.Header>
              <Card.Footer paddingBottom="$3" paddingLeft="$4">
                <Text>Track your mood over the week.</Text>
              </Card.Footer>
              <Image 
                alignSelf="center"
                source={moodBoard}
              />
            </Card>
            <Theme name="red">
              <Card bordered>
                <Card.Header>
                  <H2>Talk to your therapist</H2>
                </Card.Header>
                {fetchAllArticles().map((article) => (
                  <Button size={'$8'} chromeless>
                    <YStack space ai="center" jc='space-around'>
                      <Text ta="center" >{article.title}</Text>
                      <Text ta="right" >{article.content}</Text>
                    </YStack>
                  </Button>
                ))}
                <XStack space={'$4'} padding={'$4'} jc={'center'}>
                  <Button theme="active" size={'$3'}>Book a consultation</Button>
                  <Button theme="active" size={'$3'} onPress={() => {}}>
                    Find a Therapist
                  </Button>
                </XStack>
              </Card>
              </Theme>
          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
})