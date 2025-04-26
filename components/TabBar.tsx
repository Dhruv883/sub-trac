import {
  View,
  TouchableOpacity,
  Modal,
  Animated,
  Pressable,
} from "react-native";
import { useRef, useState } from "react";
import HomeIcon from "@/assets/icons/home.svg";
import SubscriptionIcon from "@/assets/icons/subscription.svg";
import AddIcon from "@/assets/icons/add.svg";
import AnalyticsIcon from "@/assets/icons/analytics.svg";
import ProfileIcon from "@/assets/icons/profile.svg";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;

  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.timing(drawerAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  const getIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? "#ffe0c2" : "#ffffff";

    const iconProps = {
      width: 30,
      height: 30,
      stroke: color,
    };

    switch (routeName) {
      case "home":
        return <HomeIcon {...iconProps} />;
      case "subscriptions":
        return <SubscriptionIcon {...iconProps} />;
      case "add":
        return <AddIcon {...iconProps} />;
      case "analytics":
        return <AnalyticsIcon {...iconProps} />;
      case "profile":
        return <ProfileIcon {...iconProps} />;
      default:
        return <HomeIcon {...iconProps} />;
    }
  };

  return (
    <>
      <View className="dark flex-row justify-between items-center px-10 py-4 border-t border-t-[var(--border)] bg-[var(--background)]">
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            if (route.name === "add") {
              openDrawer();
              return;
            }

            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              className={`h-14 w-14 items-center justify-center rounded-2xl ${
                isFocused && route.name !== "add"
                  ? "bg-[var(--secondary)]"
                  : null
              }`}
              key={index}
            >
              {getIcon(route.name, isFocused)}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Bottom Drawer */}
      <Modal
        visible={isDrawerOpen}
        transparent={true}
        animationType="none"
        onRequestClose={closeDrawer}
      >
        <Pressable className="flex-1 bg-black/50" onPress={closeDrawer}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: drawerAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [600, 0], // Adjust based on drawer height
                  }),
                },
              ],
            }}
            className="absolute bottom-0 w-full bg-[var(--background)] rounded-t-3xl p-6"
          >
            <View className="items-center pb-4">
              <View className="w-10 h-1 bg-gray-300 rounded-full" />
            </View>

            <View className="h-96">
              {/* Your drawer content goes here */}
              {/* For example, a form to add a new subscription */}
            </View>
          </Animated.View>
        </Pressable>
      </Modal>
    </>
  );
};

export default TabBar;
