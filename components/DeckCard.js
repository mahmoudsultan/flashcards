import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeckCard = ({ deckId, numberOfQuestions }) => {
  return <View style={styles.card}>
    <Text style={styles.cardTitle}>{ deckId }</Text>
    <Text style={styles.cardInfo}>Number of Questions: { numberOfQuestions } </Text>
  </View>
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: 'white',
    color: '#6a0dad',
    alignSelf: 'center',
    width: '80%',
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    borderRadius: 5
  },
  cardTitle: {
    fontSize: 40,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: '#6a0dad'
  },
  cardInfo: {
    fontSize: 15,
    fontWeight: '200'
  }
})

export default DeckCard;
