import { Text, TextInput, View, Pressable } from "react-native";

export function Home() {
  function handleParticipantAdd() {
    console.log("AddParticipant");
  }

  return (
    <View className="flex-1 bg-[#131016] p-6">
      <Text className="text-2xl font-bold text-white mt-12">Seu evento</Text>
      <Text className="text-[#6B6B6B]">Sexta, 4 de Outubro de 2024</Text>

      <View className="flex-row gap-2.5 mt-9 mb-10">
        <TextInput
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
    </View>
  );
}
