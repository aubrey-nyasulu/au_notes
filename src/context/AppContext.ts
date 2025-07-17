import { createContext } from "react";

type InitialState = {
    activeNotes: Note[]
    deletedNotes: Note[]
    nextIdSlot: number
    updateNote: () => any
    softDelete: () => any
    hardDelete: () => any
    restoreNote: () => any
    popurate: () => any
}

export const initialState = {
    activeNotes: [],
    deletedNotes: [],
    nextIdSlot: 0,
    updateNote: () => { },
    softDelete: () => { },
    hardDelete: () => { },
    restoreNote: () => { },
    popurate: () => { }
};

export function useAppContext(initialContext: InitialState) {
    return {
        ...initialState
    }
}

type AppContextType = ReturnType<typeof useAppContext>

const AppContext = createContext<AppContextType>(initialState)

export default AppContext