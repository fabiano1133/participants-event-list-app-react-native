import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);

  const [participantName, setParticipantName] = useState("");

  const handleAddParticipant = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Ops...",
        "Este participante já foi cadastrado",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Remover participante", `Deseja remover ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((user) => user !== name)
          ),
      },
    ]);
  };

  const date = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>{date}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(participantKey) => participantKey}
        renderItem={({ item }) => (
          <Participant
            key={item}
            user={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>Nenhum participante cadastrado</Text>
        )}
      />
    </View>
  );
}
