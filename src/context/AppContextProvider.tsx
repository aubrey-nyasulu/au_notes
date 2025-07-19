import { ReactNode } from "react";
import AppContext, { initialState, useAppContext } from "./AppContext";


export default function AppContextProvider({ children }: { children: ReactNode }) {
    return (
        <AppContext.Provider value={useAppContext(initialState)}>
            {children}
        </AppContext.Provider>
    )
}