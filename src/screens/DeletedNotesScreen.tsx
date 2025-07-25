import { View } from "react-native";
import DeletedNotes from '../components/DeletedNotes';

export default function DeletedNotesScreen() {
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
            <DeletedNotes />
        </View>
    );
}