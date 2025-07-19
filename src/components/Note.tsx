import { Link } from "expo-router"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

export default function Note({ note }: { note: Note }) {

    const [height, setHeight] = useState(0)

    return (
        <Link
            href={`/note/${note.id}`}
            style={{
                width: '100%',
                overflow: 'hidden'
            }} asChild>
            <TouchableOpacity
                style={{
                    maxHeight: 290,
                    overflow: "hidden",
                    padding: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 12,
                    alignSelf: 'flex-start',
                }}
            >
                <View
                    onLayout={(event) => {
                        if (height > 0) return

                        const { height: viewHeight } = event.nativeEvent.layout
                        console.log({ viewHeight })
                        setHeight(viewHeight)
                    }}
                    style={{ height: height > (300 - 32) ? '100%' : undefined, overflow: 'hidden', gap: 8 }}
                >
                    {
                        note?.title.trim().length > 0 &&
                        <Text style={{ fontSize: 20, fontWeight: '500', opacity: 0.8 }}>
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
    )
}
