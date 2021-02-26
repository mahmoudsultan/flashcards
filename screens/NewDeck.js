import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import { Text, Platform, TextInput, Pressable, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { addDeck } from '../actions/decks';

const NewDeck = ({ dispatch, navigation }) => {
  const [deckName, setDeckName] = useState('');

  const onChangeText = useCallback((text) => setDeckName(text), [setDeckName]);

  const submitNewDeck = useCallback(() => {
    dispatch(addDeck(deckName));
    navigation.navigate('Deck', { deckId: deckName })
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

      <Pressable android_ripple style={styles.button} disabled={!isDeckNameValid} onPress={submitNewDeck}>
        <Text style={styles.buttonText}>Add Deck</Text>
      </Pressable>
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
  },
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

export default connect()(NewDeck);