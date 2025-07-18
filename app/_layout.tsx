import AppContextProvider from "@/src/context/AppContextProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AppContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AppContextProvider>
  )
}
