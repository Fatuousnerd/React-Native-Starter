import "../global.css"
import { Linking, Pressable, Text, TouchableOpacity, View } from "react-native";

export const ScreenContent = () => {
  const OpenRepo = () => {
    Linking.openURL("https://github.com/Fatuousnerd/React-Native-Starter.git")
  }
  return (
    <View className="flex-1 flex-col gap-[25px] items-center justify-center bg-[#0B1215]">
      <Text className="text-[3rem] font-bold text-[#f0ffff] text-center leading-[4rem]">
        React Native + Nativewind Starter
      </Text>
      <TouchableOpacity onPress={OpenRepo}>
        <Text className="text-[#029bce] text-[2rem] underline">Github Repo</Text>
      </TouchableOpacity>
    </View>
  );
}