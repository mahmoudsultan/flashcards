import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import { addDeck } from '../actions/decks';

import { Text, Platform, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button } from '../components/atoms';

const NewDeck = ({ dispatch, navigation }) => {
  const [deckName, setDeckName] = useState('');

  const onChangeText = useCallback((text) => setDeckName(text), [setDeckName]);

  const submitNewDeck = useCallback(() => {
    dispatch(addDeck(deckName));
    setDeckName('');
    navigation.navigate('Deck', { deckId: deckName });
  }, [deckName, dispatch]);

  const isDeckNameValid = !!deckName && deckName.length;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Create New Deck</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={deckName}
      />

      <Button disabled={!isDeckNameValid} onPress={submitNewDeck}>
        Add Deck
      </Button>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fafafa',
    width: '80%',
    alignSelf: 'center',
    padding: 10,
    borderStyle: 'solid',
    marginTop: 20,
    borderRadius: 5,
    borderEndColor: '#000',
    borderWidth: 2
  }
});

export default connect()(NewDeck);