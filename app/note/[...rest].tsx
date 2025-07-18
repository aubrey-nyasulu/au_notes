import AppContext from "@/src/context/AppContext";
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

  const { getNote } = useContext(AppContext);

  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const note = getNote(id)

    if (note) {
      setNote({ ...note })
    } else {
      setNote({ id, title: "", body: "", done: false });
    }
  }, [id, getNote]);

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
