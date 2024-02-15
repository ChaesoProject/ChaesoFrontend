import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonGreen = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#008764',
    paddingVertical: 11,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'poppins_medium'
  },
});

export default ButtonGreen;
