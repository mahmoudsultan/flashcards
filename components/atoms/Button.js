import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const Button = ({ children, style, ...props }) => {
  return (
    <Pressable 
      android_ripple
      hitSlop={ { left: 50, right: 50, top: 30, bottom: 30 } }
      style={{ ...styles.button, ...style }}
      { ...props }
    >
      <Text style={styles.buttonText}>{ children }</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: '#6a0dad',
    paddingVertical: 10,
    paddingHorizontal: 30,
    color: 'white',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Button;
