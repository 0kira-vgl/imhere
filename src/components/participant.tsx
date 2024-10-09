import { Pressable, Text, View } from "react-native";

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export function Participant(props: ParticipantProps) {
  return (
    <View className="w-full bg-[#1F1E25] rounded-md flex-row items-center mb-[10]">
      <Text className="text-white flex-1 ml-4">{props.name}</Text>
      <Pressable
        onPress={props.onRemove}
        className="size-16 rounded-md bg-red-600 flex items-center justify-center"
      >
        <Text className="text-white text-2xl">-</Text>
      </Pressable>
    </View>
  );
}
