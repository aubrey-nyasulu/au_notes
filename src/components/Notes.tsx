import { useContext } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import AppContext from "../context/AppContext";
import Note from "./Note";

export default function Notes() {
    const { activeNotes, popurate } = useContext(AppContext);

    const { width } = useWindowDimensions()

    return (
        <FlatList
            data={activeNotes}
            renderItem={({ item }) => <Note note={item} />}
            ItemSeparatorComponent={() => (
                <View style={{ width: '100%', height: 8 }}></View>
            )}
            ListHeaderComponent={<View style={{ width, padding: 16 }}></View>}
            ListFooterComponent={<View style={{ padding: 64 }}></View>}
            refreshing={false}
            onRefresh={() => {
                popurate();
            }}
            style={{ paddingHorizontal: 8, }}
        />
    );
}
