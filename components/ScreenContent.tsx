import '../global.css';
import { Linking, Text, TouchableOpacity, View } from 'react-native';

export const ScreenContent = () => {
  const OpenRepo = () => {
    Linking.openURL('https://github.com/Fatuousnerd/React-Native-Starter.git');
  };
  const OpenGit = () => {
    Linking.openURL('https://github.com/Fatuousnerd/');
  };
  return (
    <View className="flex-1 flex-col items-center justify-center gap-[50px] bg-[#0B1215] p-[25px]">
      <Text className="text-left text-[4rem] font-bold leading-[4.5rem] text-[#f0ffff]">
        React {'\n'}Native & {'\n'}NativeWind Starter
      </Text>
      <View className="w-full flex-row items-center gap-3">
        <TouchableOpacity onPress={OpenRepo} className="flex-1">
          <Text className="rounded-lg bg-[#f0ffff] p-[10px] text-center text-[1.5rem] font-bold text-[#029bce]">
            GitHub Repo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={OpenGit} className="flex-1">
          <Text className="rounded-lg bg-[#029bce] p-[10px] text-center text-[1.5rem] font-bold text-[#ffffff]">
            GitHub Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
