import { createContext, useState } from "react"

type InitialState = {
    selectedNotes: number[],
    setSelectedNotes: () => void
}

export const initialState: InitialState = {
    selectedNotes: [],
    setSelectedNotes: () => { }
}

export function useAppContext(initialState: InitialState) {
    const [selectedNotes, setSelectedNotes] = useState<number[]>(initialState.selectedNotes)

    return { selectedNotes, setSelectedNotes }
}

type AppContextType = ReturnType<typeof useAppContext>

const AppContext = createContext<AppContextType>(initialState)

export default AppContext