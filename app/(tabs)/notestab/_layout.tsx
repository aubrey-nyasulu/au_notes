import AppContext from "@/src/context/AppContext";
import NotesContext from "@/src/context/NotesContext";
import UXContext from "@/src/context/UXContext";
import { Drawer } from "expo-router/drawer";
import { useContext } from "react";
import { Pressable, Text, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function NotesLayout() {
    const { width } = useWindowDimensions()

    const { selectedNotes, setSelectedNotes } = useContext(AppContext)
    const { restoreNote, softDelete, hardDelete } = useContext(NotesContext)
    const { setNumberOfColums } = useContext(UXContext)

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ swipeEdgeWidth: width }} >
                <Drawer.Screen
                    name="notes"
                    options={{
                        title: "Notes",
                        headerRight: () => (
                            selectedNotes.length === 0
                                ? (
                                    <Pressable
                                        onPress={() => setNumberOfColums(prevNumber => prevNumber === 1 ? 2 : 1)}
                                        style={{ padding: 6, backgroundColor: '#ccc' }}>
                                        <Text>change layout</Text>
                                    </Pressable>
                                )
                                : (
                                    <Pressable
                                        onPress={() => {
                                            softDelete(selectedNotes)
                                            setSelectedNotes([])
                                        }}
                                        style={{ padding: 6, backgroundColor: '#ccc' }}>
                                        <Text>Delete</Text>
                                    </Pressable>
                                )

                        )
                    }} />
                <Drawer.Screen name="deletednotes" options={{
                    title: "Trash",
                    headerRight: () => (
                        selectedNotes.length === 0
                            ? (
                                <Pressable
                                    onPress={() => setNumberOfColums(prevNumber => prevNumber === 1 ? 2 : 1)}
                                    style={{ padding: 6, backgroundColor: '#ccc' }}>
                                    <Text>change layout</Text>
                                </Pressable>
                            )
                            : (
                                <Pressable
                                    onPress={() => {
                                        restoreNote(selectedNotes)
                                        setSelectedNotes([])
                                    }}
                                    style={{ padding: 6, backgroundColor: '#ccc' }}>
                                    <Text>Restore</Text>
                                </Pressable>
                            )

                    )
                }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}
