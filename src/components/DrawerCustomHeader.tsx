import { MaterialIcons as Icon } from '@expo/vector-icons'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import { useContext } from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import AppContext from '../context/AppContext'
import NotesContext from '../context/NotesContext'
import UXContext from '../context/UXContext'

function LayoutSetter() {
    const { numberOfColumns, setNumberOfColums } = useContext(UXContext)



    return (
        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', }}>
            <Pressable
                onPress={() => setNumberOfColums(prevNumber => prevNumber === 1 ? 2 : 1)}
            >
                {
                    numberOfColumns === 1 &&
                    <Icon
                        name='view-stream'
                        size={24}
                        color="#545454"
                        style={{ transform: [{ rotate: '90deg' }] }} />
                }

                {
                    numberOfColumns === 2 &&
                    <Icon name='view-stream' size={24} color="#545454" />
                }
            </Pressable>
        </View>
    )
}

export default function DrawerCustomHeader() {
    const navigation = useNavigation<DrawerNavigationProp<any>>()

    const currentRouteName = useNavigationState(state => {
        const route = state.routes[state.index]
        return route.name
    })

    const { width } = useWindowDimensions()

    const { selectedNotes, setSelectedNotes } = useContext(AppContext)
    const { restoreNote, softDelete, hardDelete } = useContext(NotesContext)

    return (
        <>
            <View style={{ width: '100%', height: 24, backgroundColor: '#fffe' }}></View>

            <View style={[styles.container, { width: width - 16, marginLeft: 8, }]}>
                {
                    selectedNotes.length === 0 &&
                    <>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Icon name="menu" size={28} color="#545454" />
                        </TouchableOpacity>

                        <LayoutSetter />
                    </>
                }

                {
                    selectedNotes.length > 0 &&
                    <>
                        <Pressable
                            onPress={() => setSelectedNotes([])}
                            style={{ alignItems: 'center', flexDirection: 'row', gap: 4 }}
                        >
                            <Icon name='close' size={24} color={'#545454'} />

                            <Text style={{ fontSize: 18 }}>{selectedNotes.length}</Text>
                        </Pressable>

                        {
                            currentRouteName === 'notes' &&
                            <Pressable
                                onPress={() => {
                                    softDelete(selectedNotes)
                                    setSelectedNotes([])
                                }}
                                style={{ alignItems: 'center', flexDirection: 'row', gap: 4 }}
                            >
                                <Icon name='delete-outline' size={24} color={'#545454'} />
                            </Pressable>
                        }

                        {
                            currentRouteName === 'deletednotes' &&
                            <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                                <Pressable
                                    onPress={() => {
                                        restoreNote(selectedNotes)
                                        setSelectedNotes([])
                                    }}
                                    style={{ alignItems: 'center', flexDirection: 'row', gap: 4 }}
                                >
                                    <Icon name='restore' size={24} color={'#545454'} />
                                </Pressable>

                                <Pressable
                                    onPress={() => {
                                        hardDelete(selectedNotes)
                                        setSelectedNotes([])
                                    }}
                                    style={{ alignItems: 'center', flexDirection: 'row', gap: 4 }}
                                >
                                    <Icon name='delete-forever' size={24} color={'#545454'} />
                                </Pressable>
                            </View>
                        }
                    </>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 50,
        marginTop: 34,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 0.5,
        shadowOffset: { width: 0, height: 2 },
        justifyContent: 'space-between',
        borderRadius: 8
    },
})