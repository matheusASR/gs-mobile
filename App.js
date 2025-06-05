import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LocationScreen from "./screens/LocationScreen";
import DurationScreen from "./screens/DurationScreen";
import DamagesScreen from "./screens/DamagesScreen";
import RecommendationsScreen from "./screens/RecommendationsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Panorama Geral">
        <Stack.Screen name="Panorama Geral" component={HomeScreen} />
        <Stack.Screen name="Localização Atingida" component={LocationScreen} />
        <Stack.Screen name="Tempo de Interrupção" component={DurationScreen} />
        <Stack.Screen name="Prejuízos Causados" component={DamagesScreen} />
        <Stack.Screen name="Recomendações" component={RecommendationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
