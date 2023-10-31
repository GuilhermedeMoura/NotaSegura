import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {

  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [nota3, setNota3] = useState(null);
  const [resultado, setResultado] = useState('');

  const isNumeric = (text) => {

    // Verifica se o texto contém apenas números inteiros
    return /^[0-9]+$/.test(text);

  };

  const calcularNotaSegura = () => {

    if (nota1 !== null && nota2 !== null && nota3 !== null) {

      const nota1Value = parseFloat(nota1);
      const nota2Value = parseFloat(nota2);
      const nota3Value = parseFloat(nota3);

      if (!isNumeric(nota1) || !isNumeric(nota2) || !isNumeric(nota3)) {

        setResultado('As notas devem ser números inteiros.');
        return;
      }

      if (nota1Value > 100 || nota2Value > 100 || nota3Value > 100) {

        setResultado('As notas não podem ser maiores que 100.');
      } else {

        const mediaFinal = (nota1Value + nota2Value + nota3Value) / 3;
        setResultado(`Sua média final é: ${mediaFinal.toFixed(2)}`);
      }
    } else if (nota1 !== null && nota2 !== null) {

      const nota1Value = parseFloat(nota1);
      const nota2Value = parseFloat(nota2);

      if (!isNumeric(nota1) || !isNumeric(nota2)) {

        setResultado('As notas devem ser números inteiros.');
        return;
      }

      if (nota1Value > 100 || nota2Value > 100) {

        setResultado('As notas não podem ser maiores que 100.');
      } else {
        const mediaDesejada = 60;
        const mediaAtual = (nota1Value + nota2Value) / 2;
        const notaNecessaria = (mediaDesejada * 3 - nota1Value - nota2Value).toFixed(2);
        setResultado(`Você precisa de pelo menos ${notaNecessaria} na nota 3 para alcançar a média de aprovação de 60.`);
      }
    } else {
      setResultado('Insira as notas 1 e 2 para calcular a nota segura.');
    }
  };

  const reset = () => {

    setNota1(null);
    setNota2(null);
    setNota3(null);
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe as notas</Text>
      <Text style={styles.label}>Primeia VA:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a nota"
        keyboardType="numeric"
        value={nota1}
        onChangeText={(text) => setNota1(text)}
      />

      <Text style={styles.label}>Segunda VA:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a nota"
        keyboardType="numeric"
        value={nota2}
        onChangeText={(text) => setNota2(text)}
      />
      <Text style={styles.label}>Terceira VA:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a nota"
        keyboardType="numeric"
        value={nota3}
        onChangeText={(text) => setNota3(text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calcular Nota Segura" onPress={calcularNotaSegura} color="#3fff3f" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Resetar" onPress={reset} color="#DC3545" />
      </View>

      <Text style={styles.result}>{resultado}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Dark mode background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#fff', // Text color in dark mode
  },
  label: {

    fontSize: 24,
    marginBottom: 5,
    marginTop: 10,
    color: '#fff', // Text color in dark mode
  },
  input: {
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 20,
    color: '#fff', // Text color in dark mode
    backgroundColor: '#555', // Input field background color in dark mode
    marginTop: 7,
  },
  result: {
    fontSize: 32,
    marginTop: 20,
    color: '#fff', // Text color in dark mode
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});