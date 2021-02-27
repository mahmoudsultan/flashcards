import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

import { Button } from './atoms';

export default ({ deckId, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>There're no questions in this deck, please add some and try again.</Text>
      <Button
        onPress={() => navigation.push('NewQuestion', { deckId })}
        style={ { backgroundColor: 'white', alignItems: 'center' } }
      >
        <Text style={ { fontSize: 15, color: 'black' } }>
          <AntDesign name="pluscircle" size={15} color="black" />
          Add Question
        </Text>
      </Button>

      <Button
        onPress={() => navigation.navigate('Deck', { deckId })}
        style={ { backgroundColor: '#800080' } }
      >
        <Text style={ { fontSize: 15, color: 'white', textTransform: 'capitalize' } }>
          <MaterialCommunityIcons name="cards" size={15} color="white" />
          Back to { deckId }
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
