import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useWindowDimensions } from "react-native";

export default function TabsLayout() {
  const { width } = useWindowDimensions()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarActiveTintColor: 'dodgerblue',
        tabBarStyle: {
          backgroundColor: '#fff',
          width: width - 8,
          marginLeft: 4,
          marginBottom: 4,
          borderRadius: 8,
          position: "absolute",
        }
      }}
    >
      <Tabs.Screen
        name="notestab"
        options={{
          title: 'Notes',
          tabBarIcon: ({ color }) => (
            <Icon name="note" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aitab"
        options={{
          title: 'AI',
          tabBarIcon: ({ color }) => (
            <Icon name="auto-awesome" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}