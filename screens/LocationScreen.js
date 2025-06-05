import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function LocationScreen({ navigation }) {
  const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Bairro, Cidade ou CEP"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Tempo de Interrupção", { location })
        }
      >
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center", // centraliza horizontalmente
    padding: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 30,
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
