import { useState } from 'react'
import { Button, Configuration, H1, H3, Text, ScrollView, View, XStack, YStack } from '@my/ui'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { GiftedChat } from 'react-native-gifted-chat'
import { FlatList, StyleSheet } from 'react-native'
import axios from 'axios'

export function AiChatScreen() {
  const insets = useSafeAreaInsets()

  const [userInput, setUserInput] = useState('')
  const [output, setOutput] = useState('')
  const [messages, setMessages] = useState([])

  const onSend = async (userMessages = []) => {
    const userMessage = userMessages[0].text
    setMessages((previousMessages) => GiftedChat.append(previousMessages, userMessages))
    // const messageText = userMessage.toLower()

    // console.log(userMessage)
    try {
      // const response = await axios.post(
      //   'https://api.openai.com/v1/chat/completions',
      //   {
      //     model: 'gpt-3.5-turbo',
      //     messages: messages.map((message) => ({
      //       role: 'user',
      //       content: message.text,
      //     })),
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: 'Bearer',
      //     },
      //   }
      // )
      // const botMessage = response.data.choices[0].message.content
      // onReceive([
      //   { _id: messages.length + 1, text: botMessage, createdAt: new Date(), user: { _id: 2 } },
      // ])
    } catch (error) {
      console.error('Error in sending message to OpenAI:', error)
    }
  }

  const onReceive = (newMessages = []) => {
    // setMessages(GiftedChat.append(messages, newMessages))
  }

  const handleUserInputChange = () => {
    setUserInput(userInput)
  }

  return (
    <YStack pt={insets.top} f={1}>
      <H3 pl={10}>AI Chat Screen.</H3>
      <YStack style={{ flex: 1 }} p={10}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <View style={item.user._id === 1 ? styles.userMessage : styles.botMessage}>
              <Text>{item.text}</Text>
            </View>
          )}
        />
        <GiftedChat messages={messages} onSend={onSend} user={{ _id: 1 }} />
      </YStack>
    </YStack>
  )
}

const styles = StyleSheet.create({
  userMessage: {
    padding: 10,
    marginVertical: 5,
    marginLeft: 'auto',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    maxWidth: '80%',
  },
  botMessage: {
    padding: 10,
    marginVertical: 5,
    marginRight: 'auto',
    backgroundColor: '#b3e0ff',
    borderRadius: 10,
    maxWidth: '80%',
  },
})
