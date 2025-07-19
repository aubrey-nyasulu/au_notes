import { createContext, useCallback, useEffect, useState } from "react"
import { body } from "./temp"

type InitialState = {
    activeNotes: Note[]
    deletedNotes: Note[]
    nextIdSlot: number
    getNote: (id: number) => Note | undefined
    updateNote: () => any
    softDelete: () => any
    hardDelete: () => any
    restoreNote: () => any
    popurate: (n?: number) => void
}

export const initialState: InitialState = {
    activeNotes: [],
    deletedNotes: [],
    nextIdSlot: 0,
    getNote: () => undefined,
    updateNote: () => { },
    softDelete: () => { },
    hardDelete: () => { },
    restoreNote: () => { },
    popurate: () => { }
}

export function useAppContext(initialState: InitialState) {
    const [nextIdSlot, setNextIdSlot] = useState(0)
    const [activeNotes, setActiveNotes] = useState<Note[]>([...initialState.activeNotes])

    const getNote = useCallback((id: number): Note | undefined => {
        return activeNotes.find(note => note.id === id)
    }, [activeNotes])

    const popurate = useCallback((n = 50) => {
        let num = nextIdSlot + n
        let generatedNotes: Note[] = []

        for (let i = num; i >= nextIdSlot; i--) {
            generatedNotes.push({
                id: i,
                title: `sample note ${i}`,
                body: body.split(' ').slice(0, Math.floor(Math.random() * 100)).join(' '),
                done: false,
            })
        }

        setNextIdSlot((currId) => (currId += num + 1))

        setActiveNotes(prevNotes => ([...generatedNotes, ...prevNotes]))
    }, [])

    useEffect(() => {
        popurate(50)
    }, [popurate])

    return {
        ...initialState,
        activeNotes,
        nextIdSlot,
        getNote,
        popurate,
    }
}

type AppContextType = ReturnType<typeof useAppContext>

const AppContext = createContext<AppContextType>(initialState)

export default AppContext