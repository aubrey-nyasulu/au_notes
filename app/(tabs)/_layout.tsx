import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Notes" }} />
      <Tabs.Screen name="ai" options={{ title: "AI" }} />
    </Tabs>
  )
}
