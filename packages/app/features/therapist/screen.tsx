import React, { useCallback, useEffect, useState } from 'react'
import { useColorScheme, RefreshControl } from 'react-native'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useRouter } from 'solito/router'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import { Input, Button, H2, Paragraph, ScrollView, XStack, YStack, ListItem, Text, YGroup, Avatar } from '@my/ui'
import { ChevronRight, Search, X } from '@tamagui/lucide-icons'

export type Therapist = {
  id: number
  full_name: string
  img_url: string
  phone_number: string
  email: string
  consultation_fee: number
  dttm_joined: Date
}

export function TherapistScreen() {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [allTherapists, setAllTherapists] = useState<Therapist[]>([])
  const [filteredTherapists, setFilteredTherapists] = useState<Therapist[]>([])
  const [searchText, setSearchText] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const scheme = useColorScheme()
  const insets = useSafeAreaInsets()

  const toggleShowSearchBar = () => {
    if (showSearchBar) setSearchText('')
    setShowSearchBar(!showSearchBar)
  }
  const filterTherapistsList = (searchText: string) => {
    setSearchText(searchText)
    const searchTerms = searchText.toLowerCase().split(' ')
    setFilteredTherapists(
      allTherapists.filter((therapist) =>
        searchTerms.every((searchTerm: string) =>
          ['full_name', 'phone_number', 'email'].some((field) =>
            therapist[field].toLowerCase().includes(searchTerm)
          )
        )
      )
    )
  }

  const handleSearchBlur = () => {
    if (!searchText) toggleShowSearchBar()
  }
  const fetchAllTherapists = () => {
    setAllTherapists([
      {
        id: 1,
        full_name: 'Peter Griffin',
        dttm_joined: new Date(2023, 10, 4),
        img_url: "https://pics.craiyon.com/2023-07-04/666ea4f5a5504915b38183c9725d4091.webp",
        phone_number: '9801329123',
        consultation_fee: 150,
        email: 'test@email.com',
      },
      {
        id: 2,
        full_name: 'Donald Trump',
        dttm_joined: new Date(2022, 9, 2),
        img_url: "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?&w=150&h=150&dpr=2&q=80",
        phone_number: '4149843192',
        consultation_fee: 250,
        email: 'test@email.com',
      },
      {
        id: 3,
        full_name: 'Tom Brandon',
        dttm_joined: new Date(2021, 3, 12),
        img_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?&w=150&h=150&dpr=2&q=80",
        phone_number: '7781263912',
        consultation_fee: 90,
        email: 'test@email.com',
      },
      {
        id: 4,
        full_name: 'Jim Kenneth',
        dttm_joined: new Date(2021, 3, 12),
        img_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=150&h=150&dpr=2&q=80",
        phone_number: '7781263912',
        consultation_fee: 110,
        email: 'test@email.com',
      },
      {
        id: 5,
        full_name: 'Jen Kelly',
        dttm_joined: new Date(2021, 3, 12),
        img_url: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?&w=150&h=150&dpr=2&q=80",
        phone_number: '7781263912',
        consultation_fee: 50,
        email: 'test@email.com',
      }
    ])
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    fetchAllTherapists()
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  useEffect(() => {
    fetchAllTherapists()
  }, [])

  return (
    <SafeAreaProvider>
      <YStack
        style={{
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
          <XStack
            jc={'space-between'}
            pl={'$4'}
          // pt={'$4'}
          >
            {!showSearchBar ? (
              <H2>Therapists</H2>
            ) : (
              <Input
                onChangeText={filterTherapistsList}
                onBlur={handleSearchBlur}
                value={searchText}
                placeholder="Search therapist"
                autoFocus
                f={1}
              />
            )}
            <Button
              circular
              size={'$5'}
              onPress={toggleShowSearchBar}
              iconAfter={!showSearchBar ? Search : X}
            />
          </XStack>
          <YStack p="$1" space>
            {searchText ? (
              filteredTherapists.length > 0 ? (
                filteredTherapists.map((therapistObj, index) => {
                  return <TherapistListItem key={therapistObj.id} therapistObj={therapistObj} />
                })
              ) : (
                <Paragraph ta="center">Nothing found!</Paragraph>
              )
            ) : allTherapists.length > 0 ? (
              allTherapists.map((therapistObj, index) => {
                return <TherapistListItem key={therapistObj.id} therapistObj={therapistObj} />
              })
            ) : (
              <Paragraph ta="center">Nothing found!</Paragraph>
            )}
          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaProvider>
  )
}


const TherapistListItem = ({ therapistObj }) => {
  const { push } = useRouter()

  const handleTherapistDetailNavigation = (therapist: Therapist) => {
    push({
      pathname: `/therapist/${therapist.id}`,
      query: {
        full_name: therapist.full_name,
        phone_number: therapist.phone_number,
        dttm_joined: therapist.dttm_joined.toDateString(),
        email: therapist.email,
        img_url: therapist.img_url,
      },
    })
  }
  return (
    <YGroup>
      <YGroup.Item>
        <ListItem
          icon={
            <Avatar borderRadius={5} size="$13">
              <Avatar.Image
                accessibilityLabel="ProfileImage"
                src={therapistObj.img_url}
              />
              <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
          }
          key={therapistObj.id}
          br={'$5'}
          pressTheme
          title={
            <XStack width={'100%'} jc={'space-between'} alignItems={'center'}>
              <Text fontSize={'$5'} fontWeight={'600'} userSelect="none">
                {therapistObj.full_name}
              </Text>
              <ChevronRight />
            </XStack>
          }
          subTitle={
            <>
              <Text color={'$color.gray10Dark'}>
                {therapistObj.phone_number}
              </Text>
              <Text color={'$color.gray10Dark'}>
                {therapistObj.dttm_joined.toDateString()}
              </Text>
              <XStack jc={'space-between'} alignItems={'center'}>
                <Text userSelect="text" color={'$color.gray10Dark'}>
                  {therapistObj.email}
                </Text>
                <Text fontSize={'$5'} fontWeight={'600'} userSelect="none">
                  ${therapistObj.consultation_fee}
                </Text>
              </XStack>
            </>
          }
          onPress={() => handleTherapistDetailNavigation(therapistObj)}
        />
      </YGroup.Item>
    </YGroup>
  )
}