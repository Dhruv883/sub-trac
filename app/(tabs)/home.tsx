import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="dark flex-1 bg-[var(--background)]">
      <View className="flex-1">
        <Text className="text-white">Home</Text>
      </View>
    </SafeAreaView>
  );
}
