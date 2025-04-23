import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Text className="text-black mt-10">Login</Text>

      <TouchableOpacity
        className="bg-text-primary w-1/2 py-4 rounded-full items-center mb-6 sm:mb-8 "
        onPress={() => router.push("/home")}
      >
        <Text className="text-background-primary text-2xl font-clash-grotesk-medium">
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
}
