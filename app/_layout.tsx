import AppContextProvider from "@/src/context/AppContextProvider";
import UXContextProvider from "@/src/context/UXContextProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AppContextProvider>
      <UXContextProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </UXContextProvider>
    </AppContextProvider>
  )
}
