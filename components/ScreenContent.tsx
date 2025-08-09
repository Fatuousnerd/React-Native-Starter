import "../global.css"
import { Linking, Pressable, Text, TouchableOpacity, View } from "react-native";

export const ScreenContent = () => {
  const OpenRepo = () => {
    Linking.openURL("https://github.com/Fatuousnerd/React-Native-Starter.git")
  }
  const OpenGit = () => {
    Linking.openURL("https://github.com/Fatuousnerd/")
  }
  return (
    <View className="flex-1 flex-col gap-[50px] p-[25px] items-center justify-center bg-[#0B1215]">
      <Text className="text-[4rem] font-bold text-[#f0ffff] text-left leading-[4.5rem]">
        React Native & NativeWind Starter
      </Text>
      <View className="w-full flex-row justify-between gap-[25px]">
        <TouchableOpacity onPress={OpenRepo} className="flex-1">
          <Text className="text-[#029bce] text-[1.5rem] text-center font-bold p-[10px] bg-[#f0ffff] rounded-lg">Github Repo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={OpenGit} className="flex-1">
          <Text className="text-[#ffffff] text-[1.5rem] text-center font-bold p-[10px] bg-[#029bce] rounded-lg">Github Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}