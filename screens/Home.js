import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import DeckCard from '../components/DeckCard';

const Home = ({ navigation }) => {
  const decks = useSelector(({ decks }) => decks);

  return (<View style={styles.fullPage}>
    <View style={styles.cardList}>
      <Text style={styles.cardListTitle}>Select Subject</Text>
      {/* TODO: Scrollable */}
      {
        Object.keys(decks).map((deckId) => {
          return (
            <Pressable 
              key={deckId}
              onPress={() => navigation.navigate('Deck', { deckId })}
            >
              <DeckCard deckId={deckId} numberOfQuestions={decks[deckId].numberOfQuestions} />
            </Pressable>
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
    paddingTop: 30,
    flexDirection: 'column',
    backgroundColor: '#fafafa'
  }
});

export default Home;
