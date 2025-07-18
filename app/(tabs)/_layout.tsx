import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        position: "absolute",
      }
    }}>
      <Tabs.Screen name="notestab" />
      <Tabs.Screen name="aitab" />
    </Tabs>
  )
}
