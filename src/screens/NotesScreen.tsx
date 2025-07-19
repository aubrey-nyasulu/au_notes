import { View } from "react-native";
import Notes from "../components/Notes";

export default function NotesScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: '100%',
                height: '100%',
            }}
        >
            <Notes />
        </View>
    );
}