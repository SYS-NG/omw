import React, { useCallback, useEffect, useState } from 'react'
import { useColorScheme, RefreshControl} from 'react-native'
import CheckBox from 'expo-checkbox'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useRouter } from 'solito/router'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import { Input, Button, H2, H3, H4, H5, H6, Paragraph, ScrollView, XStack, YStack, ListItem, Text, YGroup, Avatar } from '@my/ui'
import { ChevronRight, Search, TrendingUp, X } from '@tamagui/lucide-icons'
import { SvgXml } from 'react-native-svg';

export type Task = {
  id: number
  task: string
}

export function TaskScreen() {

  const [showSearchBar, setShowSearchBar] = useState(false)
  const [allTasks, setAllTasks] = useState<Task[]>([])
  const [filteredTherapists, setFilteredTherapists] = useState<Task[]>([])
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
      allTasks.filter((therapist) =>
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
    setAllTasks([
      {
        id: 1,
        task: 'Breathing Exercise for 3 mins',
      },
      {
        id: 2,
        task: 'Identify Triggers and Journal',
      },
      {
        id: 3,
        task: 'Use "I" Statements',
      },
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
          <YStack >
            <XStack
              jc={'space-between'}
              pl={'$4'}
            >
              <H3>OMW</H3>
            </XStack>
          </YStack>

          <YStack paddingTop="$5" paddingLeft="$3">
            <XStack
              jc={'flex-start'}
              pl={'$3'}
            >
              <TrendingUp width={30} height={30} fill="#000" />
              <H4 paddingLeft="$2">Your Progress</H4>
            </XStack>

            <XStack paddingTop="$4"
              jc={'flex-start'}
              pl={'$3'}
            >
              <YStack>
                <XStack>
                  <H3 color="#808080">Hello, </H3>
                  <H3>Steven</H3>
                </XStack>
                <H5>You are off to a good start!</H5>
              </YStack>
            </XStack>
          </YStack>

          <YStack p="$1" space>

            <XStack style={{ backgroundColor:"#e6e6e6", width:"95%", marginTop:"0", marginBottom:"0", borderRadius:"25px", marginLeft:"auto", marginRight:"auto", padding:"5%"}} jc={'space-between'} alignItems={'center'}>
              <Text fontSize={'$7'} fontWeight={'700'}>Managing your anger</Text>
              <CheckBox
                disabled={false}
                value={false}
              />
            </XStack>
            {searchText ? (
              filteredTherapists.length > 0 ? (
                filteredTherapists.map((therapistObj, index) => {
                  return <TaskListItem key={therapistObj.id} taskObj={therapistObj} />
                })
              ) : (
                <Paragraph ta="center">All done!</Paragraph>
              )
            ) : allTasks.length > 0 ? (
              allTasks.map((taskObj, index) => {
                return <TaskListItem key={taskObj.id} taskObj={taskObj} />
              })
            ) : (
              <Paragraph ta="center">You are doing Great!</Paragraph>
            )}
          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaProvider>
  )
}


const TaskListItem = ({ taskObj }) => {
  const [isSelected, setSelection] = useState(false)
  const handleCheckSelect = (newValue) => {
    setSelection(newValue);
  }
  const color = isSelected ? '#99ccff' : '#e6e6e6';

  return (
    <YGroup>
      <YGroup.Item>
        <XStack style={{ backgroundColor:color, width:"95%", marginTop:"0", marginBottom:"0", marginLeft:"auto", marginRight:"auto", padding:"3.5%"}} jc={'space-between'} alignItems={'center'}>
          <Text fontSize={'$5'} fontWeight={'600'}>
            {taskObj.task}
          </Text>
          <CheckBox
            disabled={false}
            value={isSelected}
            onValueChange={(newValue) => handleCheckSelect(newValue)}
          />
        </XStack>
      </YGroup.Item>
    </YGroup>
  )
}
