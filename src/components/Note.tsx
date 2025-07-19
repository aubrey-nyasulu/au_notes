import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Note({ note }: { note: Note }) {
    return (
        <Link href={`/note/${note.id}`} style={{ width: '100%' }} asChild>
            <TouchableOpacity
                style={{
                    width: "100%",
                    maxHeight: 300,
                    overflow: "hidden",
                    padding: 16,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 12,
                }}
            >
                <View style={{ overflow: 'hidden', gap: 8 }}>
                    {
                        note?.title.trim().length > 0 &&
                        <Text style={{ fontSize: 20, fontWeight: '600', opacity: 0.8 }}>
                            {note?.title.trim()}
                        </Text>
                    }
                    {
                        note?.body.trim().length > 0 &&
                        <Text style={{ fontSize: 16, opacity: 0.6 }} numberOfLines={12}>
                            {note?.body.trim()}
                        </Text>
                    }
                </View>
            </TouchableOpacity>
        </Link>
    );
}
