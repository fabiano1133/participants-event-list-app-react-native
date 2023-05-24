import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  user: string;

  onRemove: () => void;
};

export function Participant({ user, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
