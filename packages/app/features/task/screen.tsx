import React, { useCallback, useEffect, useState } from 'react'
import { useColorScheme, RefreshControl, Image } from 'react-native'
import CheckBox from 'expo-checkbox'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useRouter } from 'solito/router'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import { Input, Button, H2, H3, H4, H5, H6, Paragraph, ScrollView, XStack, YStack, ListItem, Text, YGroup, Avatar, View } from '@my/ui'
import { ChevronUp, ChevronDown, Search, TrendingUp, X } from '@tamagui/lucide-icons'
import { SvgXml, Svg } from 'react-native-svg';
import ProgressCircle from 'react-native-progress-circle'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

export type Task = {
  id: number
  task: string
  done: boolean
}

export function TaskScreen() {

  const [numSelected, setNumSelected] = useState(0)
  const [goalSelected, setGoalSelection] = useState(false)
  const [compSelected, setCompSelection] = useState(false)
  const [ongoSelected, setOngoSelection] = useState(false)

  const [allTasks, setAllTasks] = useState<Task[]>([])
  const [compTasks, setCompTasks] = useState<Task[]>([])
  const [ongoTasks, setOngoTasks] = useState<Task[]>([])

  const [searchText, setSearchText] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const scheme = useColorScheme()
  const insets = useSafeAreaInsets()

  const getCompTasks = () => {
    const compTasks = allTasks.filter((task) => Boolean(task.done))
    setCompTasks(
      compTasks
    )
  }


  const getOngoTasks = () => {
    const ongoingTasks = allTasks.filter((task) => Boolean(!task.done))
    setOngoTasks(
      ongoingTasks
    )
  }

  const handleGoalPress = () => {
    setGoalSelection(!goalSelected);
  }
  const handleCompPress = () => {
    setCompSelection(!compSelected);
  }
  const handleOngoPress = () => {
    setOngoSelection(!ongoSelected);
  }

  const fetchAllTasks = () => {
    setAllTasks([
      {
        id: 1,
        task: 'Breathing Exercise for 3 mins',
        done: false
      },
      {
        id: 2,
        task: 'Identify Triggers and Journal',
        done: false
      },
      {
        id: 3,
        task: 'Use "I" Statements',
        done: false
      },
    ])
  }

  const percentTaskDone = () => {
    return Math.round(numSelected / allTasks.length * 100) > 100 
    ? 100 
    : Math.round(numSelected / allTasks.length * 100);
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }, [])

  useEffect(() => {
    fetchAllTasks();
  }, [])

  useEffect(() => {
    getCompTasks();
    getOngoTasks();
  }, [allTasks]);

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

            <XStack paddingTop="$4" paddingRight="10%"
              jc={'space-between'}
              pl={'$3'}
            >
              <YStack>
                <XStack>
                  <H3 color="#808080">Hello, </H3>
                  <H3>Steven</H3>
                </XStack>
                <Text fontSize={'$5'} fontWeight={'300'} paddingTop={'5%'}>You are off to a good start!</Text>
              </YStack>
              <ProgressCircle
                percent={percentTaskDone()}
                radius={35}
                borderWidth={8}
                color="#3399ff"
              >
                <Text>{percentTaskDone()}</Text>
              </ProgressCircle>
            </XStack>
          </YStack>

          <YStack p="$3" space>
            <XStack bg={"#e6e6e6"} p={'5%'} jc={'space-between'} onPress={() => handleGoalPress()}>
              <Text fontSize={'$7'} fontWeight={'700'}>Managing your anger</Text>
              {goalSelected ? (<ChevronUp />) : (<ChevronDown />)}
            </XStack>
            {goalSelected && allTasks.length > 0 ? (
              allTasks.map((taskObj, index) => {
                return <TaskListItem key={taskObj.id} taskObj={taskObj} numSelected={numSelected} setNumSelected={setNumSelected} getCompTasks={getCompTasks} getOngoTasks={getOngoTasks} />
              })
            ) : (
              <Paragraph ta="center">You are doing Great!</Paragraph>
            )}
          </YStack>

          <YStack p="$3" space>

            <Text fontSize={'$7'} fontWeight={'700'}>Task Overview</Text>

            <YStack p="$3" space >
              <XStack paddingEnd={'1%'} paddingStart={'1%'} jc={'space-between'} onPress={() => handleOngoPress()}>
                <Text fontSize={'$6'} fontWeight={'400'}>Ongoing</Text>
                <XStack alignContent='center'>
                  <Text fontSize={'$6'} paddingRight="2%">{ongoTasks.length}</Text>
                  {ongoSelected ? (<ChevronUp />) : (<ChevronDown />)}
                </XStack>
              </XStack>
              {ongoSelected && allTasks.length > 0 ? (
                ongoTasks.map((taskObj, index) => {
                  return <TaskListNoCheckItem key={taskObj.id} taskObj={taskObj} numSelected={numSelected} setNumSelected={setNumSelected} getCompTasks={getCompTasks} getOngoTasks={getOngoTasks} />
                })
              ) : (
                <></>
              )}
            </YStack>

            <YStack p="$3" gap>
              <XStack paddingEnd={'1%'} paddingStart={'1%'} jc={'space-between'} onPress={() => handleCompPress()}>
                <Text fontSize={'$6'} fontWeight={'400'}>Completed</Text>
                <XStack alignContent='center'>
                  <Text fontSize={'$6'} paddingRight="2%">{compTasks.length}</Text>
                  {compSelected ? (<ChevronUp />) : (<ChevronDown />)}
                </XStack>
              </XStack>
              {compSelected && allTasks.length > 0 ? (
                compTasks.map((taskObj, index) => {
                  return <TaskListNoCheckItem key={taskObj.id} taskObj={taskObj} numSelected={numSelected} setNumSelected={setNumSelected} getCompTasks={getCompTasks} getOngoTasks={getOngoTasks} />
                })
              ) : (
                <></>
              )}
            </YStack>
          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaProvider>
  )
}
const TaskListNoCheckItem = ({ taskObj, numSelected, setNumSelected, getCompTasks, getOngoTasks }) => {
  const color = taskObj.done ? '#99ccff' : '#e6e6e6';

  return (
    <YGroup>
      <YGroup.Item>
        <XStack bg={color} p={'3.5%'} jc={'space-between'}>
          <Text fontSize={'$5'} fontWeight={'600'}>
            {taskObj.task}
          </Text>
        </XStack>
      </YGroup.Item>
    </YGroup>
  )
}

const TaskListItem = ({ taskObj, numSelected, setNumSelected, getCompTasks, getOngoTasks }) => {
  const [isSelected, setSelection] = useState(taskObj.done)


  const handleCheckSelect = (newValue, taskObj) => {
    taskObj.done = newValue;
    getCompTasks();
    getOngoTasks();

    setSelection(newValue);
    if (newValue) {
      setNumSelected(numSelected + 1);
    } else {
      setNumSelected(numSelected - 1);
    }

  }
  const color = isSelected ? '#99ccff' : '#e6e6e6';

  return (
    <YGroup>
      <YGroup.Item>
      <XStack bg={color} p={'3.5%'} jc={'space-between'}>
          <Text fontSize={'$5'} fontWeight={'600'}>
            {taskObj.task}
          </Text>
          <CheckBox
            disabled={false}
            value={isSelected}
            onValueChange={(newValue) => handleCheckSelect(newValue, taskObj)}
          />
        </XStack>
      </YGroup.Item>
    </YGroup>
  )
}
