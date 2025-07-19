import { createContext, useCallback, useEffect, useState } from "react"
import { body } from "./temp"

type InitialState = {
    activeNotes: Note[]
    deletedNotes: Note[]
    nextIdSlot: number
    getNote: (id: number) => Note | undefined
    addNote: (noteContents: Pick<Note, "title" | "body">) => Note
    updateNote: (noteContents: Pick<Note, "id" | "title" | "body">) => Note
    softDelete: () => any
    hardDelete: () => any
    restoreNote: () => any
    popurate: (n?: number) => void
}

const noteTemplate: Note = {
    id: 0,
    title: '',
    body: '',
    done: false
}

export const initialState: InitialState = {
    activeNotes: [],
    deletedNotes: [],
    nextIdSlot: 0,
    getNote: () => undefined,
    addNote: () => noteTemplate,
    updateNote: () => noteTemplate,
    softDelete: () => { },
    hardDelete: () => { },
    restoreNote: () => { },
    popurate: () => { }
}

export function useNotesContext(initialState: Pick<InitialState, 'activeNotes' | 'deletedNotes'>) {
    const [nextIdSlot, setNextIdSlot] = useState(0)
    const [activeNotes, setActiveNotes] = useState<Note[]>([...initialState.activeNotes])
    const [deletedNotes, setDeletedNotes] = useState([...initialState.deletedNotes,])

    const getNote = useCallback((id: number): Note | undefined => {
        return activeNotes.find(note => note.id === id)
    }, [activeNotes])

    const addNote = (noteContents: Pick<Note, 'title' | 'body'>) => {
        const newNote = {
            id: nextIdSlot,
            done: false,
            ...noteContents,
        };

        setActiveNotes((prevNotes) => [newNote, ...prevNotes]);
        setNextIdSlot((currId) => (currId += 1));

        return newNote;
    };

    const updateNote = (noteContents: Pick<Note, 'id' | 'title' | 'body'>): Note => {
        const note = activeNotes.find(({ id }) => id === noteContents?.id);

        if (note === undefined) {
            return addNote(noteContents);
        }

        if (!noteContents?.title && !noteContents?.body) {
            softDelete(noteContents?.id);
            hardDelete(noteContents?.id);

            return { id: noteContents?.id, title: "", body: "", done: false };
        }

        const updatedNotes = [...activeNotes].map((note) => {
            if (note.id === noteContents.id) {
                return { ...note, ...noteContents };
            }

            return note;
        });

        setActiveNotes([...updatedNotes]);
        setNextIdSlot((currId) => (currId += 1));

        return { ...note, ...noteContents };
    };

    function softDelete(noteId: number) {
        const targetNote = activeNotes.find(({ id }) => id === noteId);

        if (!targetNote) return

        setDeletedNotes((prevNotes) => [targetNote, ...prevNotes]);
        setActiveNotes((prevNotes) => prevNotes.filter(({ id }) => id !== noteId));
    }

    function hardDelete(noteId: number) {
        setDeletedNotes((prevNotes) => prevNotes.filter(({ id }) => id !== noteId));
    }

    const restoreNote = (noteId: number) => {
        const targetNote = deletedNotes.find(({ id }) => id === noteId);

        if (!targetNote) return;

        const notes = [...activeNotes, targetNote];
        notes.sort((a, b) => b?.id - a?.id);

        setActiveNotes(notes);
        setDeletedNotes((prevNotes) => prevNotes.filter(({ id }) => id !== noteId));
    };

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
        activeNotes,
        nextIdSlot,
        getNote,
        addNote,
        popurate,
        updateNote,
        softDelete,
        hardDelete,
        restoreNote,
    }
}

type NotesContextType = ReturnType<typeof useNotesContext>

const NotesContext = createContext<NotesContextType>(initialState)

export default NotesContext