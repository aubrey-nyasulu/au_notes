import { ReactNode } from "react";
import UXContext, { initialState, useUXContext } from "./UXContext";


export default function UXContextProvider({ children }: { children: ReactNode }) {
    return (
        <UXContext.Provider value={useUXContext(initialState)}>
            {children}
        </UXContext.Provider>
    )
}