import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Analytics() {
  return (
    <SafeAreaView className="dark flex-1 bg-[var(--background)]">
      <View className="flex-1">
        <Text className="text-white">Analytics</Text>
      </View>
    </SafeAreaView>
  );
}
