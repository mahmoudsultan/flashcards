import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import DeckCard from '../components/DeckCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const decks = useSelector(({ decks }) => decks);

  const renderDeck = ({ item }) => (
    <TouchableOpacity
      onPressOut={() => navigation.navigate('Deck', { deckId: item.id })}
    >
      <DeckCard deckId={item.id} numberOfQuestions={item.numberOfQuestions} />
    </TouchableOpacity>
  );

  const decksWithIds = Object.entries(decks).map(([deckId, deck]) => ({ id: deckId, ...deck }));

  return (<View style={styles.fullPage}>
    <View style={styles.cardList}>
      <Text style={styles.cardListTitle}>Select Subject</Text>
      <FlatList
        data={decksWithIds}
        renderItem={renderDeck}
        keyExtractor={item => item.id}
      />
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
