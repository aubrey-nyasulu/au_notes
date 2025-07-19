import { useContext } from "react"
import { ScrollView, useWindowDimensions, View } from "react-native"
import AppContext from "../context/AppContext"
import Note from "./Note"

export default function Notes() {
    const { activeNotes } = useContext(AppContext)

    const { width } = useWindowDimensions()

    return (
        <ScrollView style={{ width, paddingTop: 16, paddingHorizontal: 8, }}>
            <View style={{ gap: 8, flexDirection: 'row' }}>
                <View style={{ gap: 8, width: (width / 2) - (8 * 1.5), }}>
                    {
                        activeNotes
                            .filter((_, i) => (i + 1) % 2 !== 0)
                            .map((note) => (<Note key={note.id} note={note} />))
                    }
                </View>
                <View style={{ gap: 8, width: (width / 2) - (8 * 1.5), }}>
                    {
                        activeNotes
                            .filter((_, i) => (i + 1) % 2 === 0)
                            .map((note) => (<Note key={note.id} note={note} />))
                    }
                </View>
            </View>
        </ScrollView>
    )
}
