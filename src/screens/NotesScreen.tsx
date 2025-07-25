import Icon from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';
import { useContext } from 'react';
import { View } from "react-native";
import Notes from "../components/Notes";
import NotesContext from '../context/NotesContext';

export default function NotesScreen() {
    const { nextIdSlot } = useContext(NotesContext)

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: '100%',
                height: '100%',
            }}
        >
            <Notes />

            <Link
                href={`/note/${nextIdSlot}`}
                style={{
                    backgroundColor: 'dodgerblue',
                    position: 'absolute',
                    bottom: 110,
                    right: 8,
                    padding: 8,
                    borderRadius: 8,
                    elevation: 0.5
                }}>
                <Icon name="plus" size={32} color={'#fff'} />
            </Link>
        </View>
    );
}