import NotesContext from "@/src/context/NotesContext";
import { Stack, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  TextInput,
  useWindowDimensions,
  View
} from "react-native";

export default function NoteScreen() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>()
  const id = Number(rest[rest.length - 1])

  const { height } = useWindowDimensions();

  const { getNote, updateNote } = useContext(NotesContext);

  const [note, setNote] = useState<Note>({ id, body: '', title: '', done: false });

  useEffect(() => {
    const note = getNote(id)

    if (note) {
      setNote({ ...note })
    } else {
      setNote({ id, title: "", body: "", done: false });
    }
  }, [id, getNote]);


  const handleTextChange = (value: string, target: string) => {
    if (target === "title") {
      const updatedNote = updateNote({ ...note, title: value });
      setNote(updatedNote);
    } else {
      const updatedNote = updateNote({ ...note, body: value });
      setNote(updatedNote);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <View style={{ padding: 0, flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              padding: 16,
              height: height - 80,
              flex: 1,
            }}
          >
            <TextInput
              value={note?.title}
              placeholder="Title"
              placeholderTextColor={"#aaa9"}
              onChangeText={(value) => {
                handleTextChange(value, "title");
              }}
              style={{
                fontSize: 20,
                fontWeight: "500",
              }}
            />
            <TextInput
              multiline
              value={note?.body}
              placeholder="Note"
              placeholderTextColor={"#aaa9"}
              onChangeText={(value) => {
                handleTextChange(value, "body");
              }}
              style={{
                paddingTop: 16,
                fontSize: 16,
                opacity: 0.6,
                flex: 1,
                textAlignVertical: "top",
              }}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
