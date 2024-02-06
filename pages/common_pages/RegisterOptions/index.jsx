import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RegisterOptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Página Inicial</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Página 1"
          //onPress={() => navigation.navigate('Pagina1')}
        />
        <Button
          title="Ir para Página 2"
          //onPress={() => navigation.navigate('Pagina2')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default RegisterOptions;
