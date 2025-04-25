import { Stack } from "expo-router";
import "./globals.css";
import { FontProvider } from "@/providers/FontProvider";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <FontProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="light" backgroundColor="#111111" />
    </FontProvider>
  );
}
