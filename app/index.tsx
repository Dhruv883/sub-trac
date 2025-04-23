import { useState } from "react";
import { View } from "react-native";
import Welcome from "./(auth)/welcome";
import { Redirect } from "expo-router";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    Redirect({ href: "/(tabs)/home" });
  } else {
    Redirect({ href: "/(auth)/welcome" });
  }
}
