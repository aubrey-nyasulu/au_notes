import { createContext, useState } from "react"

type InitialState = {
    numberOfColumns: number
    setNumberOfColums: () => void
}

export const initialState: InitialState = {
    numberOfColumns: 1,
    setNumberOfColums: () => { }
}

export function useUXContext(initialState: InitialState) {
    const [numberOfColumns, setNumberOfColums] = useState<number>(initialState.numberOfColumns)

    return { numberOfColumns, setNumberOfColums }
}

type UXContextType = ReturnType<typeof useUXContext>

const UXContext = createContext<UXContextType>(initialState)

export default UXContext