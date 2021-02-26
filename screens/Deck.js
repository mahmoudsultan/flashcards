import React from 'react';
import { useSelector } from 'react-redux';

import { Text, View, StyleSheet } from 'react-native';
import { Button } from '../components/atoms';

export default ({ navigation, route }) => {
  const deckId = route.params.deckId;
  const deck = useSelector(({ decks }) => decks[deckId]);

  return (
    <View style={styles.container}>
      <Text style={styles.deckTitle}>{ deckId }</Text>
      <Text style={styles.deckNumberOfQuestions}>
        Number of Questions: { deck.numberOfQuestions }
      </Text>
      <Button
        onPress={() => navigation.navigate('NewQuestion', { deckId })}
      >
        Add Question
      </Button>
      <Button
        style={ { backgroundColor: '#32CD32' } }
        onPress={() => navigation.navigate('Quiz', { deckId })}
      >
        Start Quiz
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckTitle: {
    fontSize: 70,
    fontWeight: 'normal',
    marginBottom: 30,
    textTransform: 'capitalize'
  },
  deckNumberOfQuestions: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50
  }
});
