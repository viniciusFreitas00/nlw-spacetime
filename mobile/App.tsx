import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-center text-5xl font-bold text-zinc-50 ">
        Open up to start working on your app!
      </Text>
      <StatusBar style="light" />
    </View>
  )
}
