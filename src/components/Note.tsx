import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function Note({ note }: { note: Note }) {
    return (
        <Link href={`/note/${note.id}`} style={{ width: '100%' }} asChild>
            <TouchableOpacity
                style={{
                    backgroundColor: "#ddd",
                    width: "100%",
                    padding: 16,
                    borderRadius: 12,
                }}
            >
                <Text style={{ flex: 1, }}>
                    {note?.title.trim() || note?.body}
                </Text>
            </TouchableOpacity>
        </Link>
    );
}
