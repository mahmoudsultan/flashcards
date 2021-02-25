import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import DeckCard from '../components/DeckCard';

const Home = () => {
  const decks = useSelector(({ decks }) => decks);

  return (<View style={styles.fullPage}>
    <View style={styles.cardList}>
      <Text style={styles.cardListTitle}>Select Subject</Text>
      {
        Object.keys(decks).map((deckId) => {
          return (
            <DeckCard key={deckId} deckId={deckId} numberOfQuestions={decks[deckId].numberOfQuestions} />
          );
        })
      }
    </View>
  </View>);
};

const styles = StyleSheet.create({
  fullPage: {
    backgroundColor: 'black',
    flex: 1
  },
  cardListTitle: {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fafafa'
  }
})

export default Home;
