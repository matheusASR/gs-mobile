import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { getData, saveData } from "../utils/storage";

export default function HomeScreen({ navigation }) {
  const [events, setEvents] = useState([]);

  const loadData = async () => {
    const data = await getData("events");
    setEvents(data || []);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadData);
    return unsubscribe;
  }, [navigation]);

  const removeEvent = async (indexToRemove) => {
    const updatedEvents = events.filter((_, index) => index !== indexToRemove);
    setEvents(updatedEvents);
    await saveData("events", updatedEvents);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Localização Atingida")}
        >
          <Text style={styles.buttonText}>Cadastrar Local</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Recomendações")}
        >
          <Text style={styles.buttonText}>Recomendações</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Resumo dos eventos:</Text>
      <FlatList
        data={events}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() =>
                Alert.alert(
                  "Remover Evento",
                  "Tem certeza que deseja remover este evento?",
                  [
                    { text: "Cancelar", style: "cancel" },
                    { text: "Remover", onPress: () => removeEvent(index) },
                  ]
                )
              }
            >
              <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>

            <Text style={styles.cardTitle}>Local:</Text>
            <Text style={styles.cardText}>{item.location}</Text>

            <Text style={styles.cardTitle}>Tempo de Interrupção:</Text>
            <Text style={styles.cardText}>{item.duration} horas</Text>

            <Text style={styles.cardTitle}>Prejuízo Causado:</Text>
            <Text style={styles.cardText}>{item.damages}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 40,
  },
  card: {
    backgroundColor: "rgb(247, 254, 253)",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    position: "relative",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardText: {
    marginBottom: 8,
    fontSize: 15,
  },
  removeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#ff4d4d",
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
