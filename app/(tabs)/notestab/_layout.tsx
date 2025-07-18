import { Drawer } from "expo-router/drawer";
import { useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function NotesLayout() {
    const { width } = useWindowDimensions()

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ swipeEdgeWidth: width }} >
                <Drawer.Screen name="notes" options={{ title: "Notes" }} />
                <Drawer.Screen name="deletednotes" options={{ title: "Trash" }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}
