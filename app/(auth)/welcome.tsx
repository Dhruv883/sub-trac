import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-primary-dark">
      <View className="flex-1 items-center gap-10 p-6">
        <View className="w-full h-1/2 items-center">
          <View className="w-96 relative p-5 h-4 ">
            <LinearGradient
              colors={["#202120", "#121312"]}
              style={{
                width: 185,
                height: 185,
                borderRadius: 24,
                position: "absolute",
                zIndex: 1,
              }}
              className="py-5 px-3 top-10 left-4 transform -rotate-6"
            >
              <View className="flex-1 justify-between items-start">
                <View>
                  <View className="flex-row items-center justify-start mb-2">
                    <Image
                      source={require("../../assets/images/netflix.png")}
                      className="h-14 w-14"
                    />
                    <Text className="font-poppins-medium text-4xl text-white my-auto pt-4">
                      Netflix
                    </Text>
                  </View>
                  <Text className="font-poppins-light text-xl text-white ml-3">
                    Monthly
                  </Text>
                </View>
                <Text className="ml-3 text-white text-3xl pt-2">$17.99</Text>
              </View>
            </LinearGradient>

            <LinearGradient
              colors={["#202120", "#121312"]}
              style={{
                width: 185,
                height: 185,
                borderRadius: 24,
                position: "absolute",
                zIndex: 2,
              }}
              className="py-5 px-3 top-40 right-6 transform rotate-12"
            >
              <View className="flex-1 justify-between items-start">
                <View>
                  <View className="flex-row items-center justify-start mb-2 gap-1">
                    <Image
                      source={require("../../assets/images/spotify.png")}
                      className="h-14 w-14"
                    />
                    <Text className="font-poppins-medium text-4xl text-white my-auto pt-4">
                      Spotify
                    </Text>
                  </View>
                  <Text className="font-poppins-light text-xl text-white ml-3">
                    Monthly
                  </Text>
                </View>
                <Text className="ml-3 text-white text-3xl pt-2">$6.99</Text>
              </View>
            </LinearGradient>
          </View>
        </View>

        <View className="w-full items-center my-8">
          <Text className="w-full text-text-primary text-[2.5rem] text-center mb-4 font-clash-grotesk-medium">
            Manage your subscriptions easily
          </Text>
          <Text className="text-text-secondary text-base text-center max-w-xs sm:max-w-sm mx-auto">
            The best application for managing and tracking your subscriptions
          </Text>
        </View>

        <TouchableOpacity
          className="bg-text-primary w-1/2 py-4 rounded-full items-center mb-6 sm:mb-8 "
          onPress={() => router.push("/home")}
        >
          <Text className="text-background-primary text-2xl font-clash-grotesk-medium">
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
