import DrawerCustomHeader from "@/src/components/DrawerCustomHeader";
import { Drawer } from "expo-router/drawer";
import { useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
    const { width } = useWindowDimensions()

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ swipeEdgeWidth: width }} >
                <Drawer.Screen
                    name="notes"
                    options={{
                        title: "Notes",
                        drawerStyle: {
                            backgroundColor: '#fff',
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        },
                        drawerType: 'back',
                        header: () => (
                            <DrawerCustomHeader />
                        )
                    }}
                />
                <Drawer.Screen
                    name="deletednotes"
                    options={{
                        title: "Trash",
                        drawerStyle: {
                            backgroundColor: '#fff',
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        },
                        drawerType: 'back',
                        header: () => (
                            <DrawerCustomHeader />
                        )
                    }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}
