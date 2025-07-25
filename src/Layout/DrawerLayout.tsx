import DrawerCustomHeader from "@/src/components/DrawerCustomHeader";
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Drawer } from "expo-router/drawer";
import { useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
    const { width } = useWindowDimensions()

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{
                swipeEdgeWidth: width,
                drawerActiveTintColor: '#000',
                drawerContentContainerStyle: {
                    paddingTop: 80,
                    gap: 4
                }
            }} >
                <Drawer.Screen
                    name="notes"
                    options={{
                        title: "Notes",
                        drawerStyle: {
                            backgroundColor: '#fff',
                        },
                        drawerType: 'back',
                        header: () => (
                            <DrawerCustomHeader />
                        ),
                        drawerIcon: ({ color }) => (
                            <Icon name="notes" size={24} color={color} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="deletednotes"
                    options={{
                        title: "Trash",
                        drawerStyle: {
                            backgroundColor: '#fff',
                        },
                        drawerType: 'back',
                        header: () => (
                            <DrawerCustomHeader />
                        ),
                        drawerIcon: ({ color }) => (
                            <Icon name="delete" size={24} color={color} />
                        )
                    }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}
