import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function RecommendationsScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>
        Orientações Preventivas:
      </Text>
      <Text style={{ marginBottom: 5 }}>• Mantenha lanternas com pilhas novas ou baterias carregadas em locais acessíveis.</Text>
      <Text style={{ marginBottom: 5 }}>• Armazene água potável e alimentos não perecíveis suficientes para pelo menos 3 dias.</Text>
      <Text style={{ marginBottom: 5 }}>• Tenha um carregador portátil (power bank) sempre carregado para emergências.</Text>
      <Text style={{ marginBottom: 5 }}>• Instale protetores de energia nos eletrodomésticos e equipamentos eletrônicos.</Text>
      <Text style={{ marginBottom: 15 }}>• Conheça e tenha anotados os números de emergência da sua região.</Text>

      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>
        Boas Práticas Durante Falta de Energia:
      </Text>
      <Text style={{ marginBottom: 5 }}>• Evite contato com cabos ou fios caídos, mesmo que não aparentem estar energizados.</Text>
      <Text style={{ marginBottom: 5 }}>• Desligue eletrodomésticos e aparelhos eletrônicos para evitar danos quando a energia retornar.</Text>
      <Text style={{ marginBottom: 5 }}>• Mantenha portas da geladeira e do freezer fechadas o máximo possível para conservar os alimentos.</Text>
      <Text style={{ marginBottom: 5 }}>• Utilize lanternas ao invés de velas para evitar riscos de incêndio.</Text>
      <Text style={{ marginBottom: 5 }}>• Permaneça em locais seguros e evite áreas alagadas ou com sinais de instabilidade elétrica.</Text>
    </ScrollView>
  );
}
