import NotesContextProvider from "@/src/context/NotesContextProvider";
import UXContextProvider from "@/src/context/UXContextProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <NotesContextProvider>
      <UXContextProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </UXContextProvider>
    </NotesContextProvider>
  )
}
