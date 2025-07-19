import { Link } from "expo-router"
import { useContext, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import AppContext from "../context/AppContext"

export default function Note({ note }: { note: Note }) {
    const [height, setHeight] = useState(0)
    const [borderColor, setBorderColor] = useState<'#ccc' | 'green'>('#ccc')

    const { selectedNotes, setSelectedNotes } = useContext(AppContext)

    const changeBorderColor = () => {
        if (borderColor === '#ccc') {
            setBorderColor('green')
        } else {
            setBorderColor('#ccc')
        }
    }

    return (
        <Link
            href={`/note/${note.id}`}
            style={{
                width: '100%',
                overflow: 'hidden'
            }} asChild>
            <TouchableOpacity
                onPress={(ev) => {
                    if (selectedNotes.length) {
                        ev.preventDefault()
                        changeBorderColor()
                        setSelectedNotes(prev => prev.filter((id) => id !== note.id))
                        setSelectedNotes(prev => [...prev, note.id])
                    }
                }
                }
                onLongPress={(ev) => {
                    changeBorderColor()
                    setSelectedNotes(prev => [...prev, note.id])
                }}
                style={{
                    maxHeight: 290,
                    overflow: "hidden",
                    padding: 10,
                    borderColor,
                    borderWidth: borderColor === "#ccc" ? 1 : 2,
                    borderRadius: 12,
                    alignSelf: 'flex-start',
                }}
            >
                <View
                    onLayout={(event) => {
                        if (height > 0) return

                        const { height: viewHeight } = event.nativeEvent.layout

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
