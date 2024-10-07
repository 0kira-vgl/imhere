import { Text, TextInput, View } from "react-native";

export function Home() {
  return (
    <View className="flex-1 bg-[#131016] p-6">
      <Text className="text-2xl font-bold text-white mt-12">Seu evento</Text>
      <Text className="text-[#6B6B6B]">Sexta, 4 de Outubro de 2024</Text>

      <TextInput
        placeholder="Nome do participante"
        className="h-[56] p-4 text-zinc-50 text-xl bg-[#1F1E25] rounded-md"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  );
}
