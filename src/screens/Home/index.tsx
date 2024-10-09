import { useState } from "react";
import { Participant } from "../../components/participant";
import {
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
  Alert,
} from "react-native";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]); // "<string[]>" diz que é um array de string
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      // verica se esse participante já existe
      return Alert.alert(
        "Participante existente",
        "Já existe um participante com esse nome na lista"
      );
    }

    // desestrutura o prevState (um array) e add o participante
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Romover participante",
      `Deseja remover o participante ${name}?`,
      [
        {
          text: "Sim",
          style: "destructive",
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            ), // pega o estado atual de participantes e filtra para o participante excluido não aparecer
        },

        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View className="flex-1 bg-[#131016] p-6">
      <Text className="text-2xl font-bold text-white mt-12">Seu evento</Text>
      <Text className="text-[#6B6B6B]">Sexta, 4 de Outubro de 2024</Text>

      <View className="flex-row gap-2.5 mt-9 mb-10">
        <TextInput
          onChangeText={setParticipantName} // pega o texto digitado no input para add um participante
          value={participantName}
          placeholder="Nome do participante"
          className="h-16 flex-1 p-4 text-zinc-50 text-xl bg-[#1F1E25] rounded-md"
          placeholderTextColor="#6B6B6B"
        />

        <Pressable
          onPress={handleParticipantAdd}
          className="size-16 rounded-md bg-[#31CF67] flex items-center justify-center"
        >
          <Text className="text-white text-2xl">+</Text>
        </Pressable>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false} // remover scroll
        data={participants}
        keyExtractor={(item) => item} // key
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => {
          return (
            <View className="flex-1 justify-center items-center mt-12">
              <Text className="text-white text-lg">
                Nenhum participante adicionado
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
