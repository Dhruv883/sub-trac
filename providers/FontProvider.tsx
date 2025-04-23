import { ReactNode, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

type FontProviderProps = {
  children: ReactNode;
};

export function FontProvider({ children }: FontProviderProps) {
  const [loaded, error] = useFonts({
    "Clash-Grotesk-Extralight": require("@/assets/fonts/ClashGrotesk-ExtraLight.otf"),
    "Clash-Grotesk-Light": require("@/assets/fonts/ClashGrotesk-Light.otf"),
    "Clash-Grotesk-Medium": require("@/assets/fonts/ClashGrotesk-Medium.otf"),
    "Clash-Grotesk-Regular": require("@/assets/fonts/ClashGrotesk-Regular.otf"),
    "Clash-Grotesk-Semibold": require("@/assets/fonts/ClashGrotesk-SemiBold.otf"),
    "Clash-Grotesk-Bold": require("@/assets/fonts/ClashGrotesk-Bold.otf"),

    "Poppins-Extralight": require("@/assets/fonts/Poppins-ExtraLight.otf"),
    "Poppins-Light": require("@/assets/fonts/Poppins-Light.otf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.otf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.otf"),
    "Poppins-Semibold": require("@/assets/fonts/Poppins-SemiBold.otf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      console.log("Fonts loaded successfully");
    }
    if (error) {
      console.error("Font loading error:", error);
    }

    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <>{children}</>;
}
