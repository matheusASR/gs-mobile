import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { getData, saveData } from '../utils/storage';

export default function DamagesScreen({ route, navigation }) {
  const [damages, setDamages] = useState('');
  const { location, duration } = route.params;

  const handleSave = async () => {
    const newEvent = { location, duration, damages };
    const existing = await getData('events');
    await saveData('events', [...existing, newEvent]);
    navigation.navigate('Panorama Geral');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Descreva os prejuízos"
        value={damages}
        onChangeText={setDamages}
        style={styles.input}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 30,
    fontSize: 16,
    paddingVertical: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
