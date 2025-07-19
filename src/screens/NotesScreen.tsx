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
                    backgroundColor: '#000',
                    position: 'absolute',
                    bottom: 120,
                    right: 16,
                    padding: 8,
                    borderRadius: 16,
                }}>
                <Icon name="plus" size={40} color={'#fff'} />
            </Link>
        </View>
    );
}