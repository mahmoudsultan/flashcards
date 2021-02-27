import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default ({ score, numberOfQuestions, children }) => {
  let message;
  let backgroundColor;
  let color;

  if (score < numberOfQuestions * 0.5) {
    message = 'That\'s okay, I\'m sure you\'ll do better next time 😊';
    backgroundColor = '#fceea7';
    color = '#000';
  } else if (score < numberOfQuestions * 0.75) {
    message = 'Great job! But there\'s still room for improvements 💪';
    backgroundColor = '#add8e6';
    color = '#000';
  } else {
    message = 'Awesome job! you nailed it 🎉';
    backgroundColor = '#32CD32';
    color = 'white';
  }

  return (
    <View style={ [styles.container, { backgroundColor }] }>
      <Text style={ [styles.message, { color }] }>{message}</Text>
      <Text style={ [styles.score, { color }] }>Score: {score} / {numberOfQuestions}</Text>
      <View>
        { children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: Dimensions.get('window').height / 2,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5
  },
  message: {
    fontSize: 35,
    textAlign: 'center',
  },
  score: {
    fontSize: 20,
    marginTop: 20,
  }
});
