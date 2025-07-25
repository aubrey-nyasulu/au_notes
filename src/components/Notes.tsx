import { useContext } from "react"
import { ScrollView, useWindowDimensions, View } from "react-native"
import NotesContext from "../context/NotesContext"
import UXContext from "../context/UXContext"
import Note from "./Note"

export default function Notes() {
    const { activeNotes } = useContext(NotesContext)

    const { numberOfColumns } = useContext(UXContext)

    const { width } = useWindowDimensions()

    return (
        <ScrollView style={{ width, paddingTop: 70, paddingHorizontal: 8, }}>
            {
                numberOfColumns === 1 &&
                <View style={{ gap: 8, width: '100%', }}>
                    {
                        activeNotes
                            .map((note) => (<Note key={note.id} note={note} />))
                    }
                </View>
            }
            {
                numberOfColumns === 2 &&
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
            }

            <View style={{ height: 200 }}></View>
        </ScrollView>
    )
}
