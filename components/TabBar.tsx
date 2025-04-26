import { View, TouchableOpacity } from "react-native";
import HomeIcon from "@/assets/icons/home.svg";
import SubscriptionIcon from "@/assets/icons/subscription.svg";
import AddIcon from "@/assets/icons/add.svg";
import AnalyticsIcon from "@/assets/icons/analytics.svg";
import ProfileIcon from "@/assets/icons/profile.svg";

const TabBar = ({ state, descriptors, navigation }: any) => {
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
    <View className="dark flex-row justify-between items-center px-10 py-4 border-t border-t-[var(--border)] bg-[var(--background)]">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
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
              isFocused ? "bg-[var(--secondary)]" : null
            }`}
            key={index}
          >
            {getIcon(route.name, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
