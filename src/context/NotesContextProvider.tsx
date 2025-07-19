import { ReactNode } from "react";
import NotesContext, { initialState, useNotesContext } from "./NotesContext";


export default function NotesContextProvider({ children }: { children: ReactNode }) {
    return (
        <NotesContext.Provider value={useNotesContext(initialState)}>
            {children}
        </NotesContext.Provider>
    )
}