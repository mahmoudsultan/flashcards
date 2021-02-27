import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as Animatable from 'react-native-animatable';

import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput, Button } from '../components/atoms';
import { newQuestion } from '../actions/shared';

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  const deckId = route.params.deckId;

  const [questionTitle, setQuestionTitle] = useState('');
  const [questionAnswer, setQuestionAnswer] = useState('');
  const [invalidSubmit, setInvalidSubmit] = useState(false);

  const handleAddQuestion = useCallback(() => {
    const isFormValid = !!questionTitle.trim() && !!questionAnswer.trim();

    if (!isFormValid) {
      return setInvalidSubmit(true);
    }

    setInvalidSubmit(false);

    dispatch(newQuestion(deckId, { question: questionTitle, answer: questionAnswer }));
    setQuestionTitle('');
    setQuestionAnswer('');

    navigation.navigate('Deck', { deckId });
  }, [dispatch, questionTitle, questionAnswer]);


  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.pageTitle}>Add Question to { deckId }</Text>
      <TextInput
        placeholder='Question'
        onChangeText={ (text) => setQuestionTitle(text) }
        value={questionTitle}
      />
      <TextInput
        placeholder='Answer'
        onChangeText={ (text) => setQuestionAnswer(text) }
        value={questionAnswer}
      />

      <Button
        onPress={handleAddQuestion}
      >
        Add Question
      </Button>
      { invalidSubmit && <Animatable.Text animation="shake" style={styles.buttonHint}>Please fill question text and answer.</Animatable.Text> }
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'normal',
    marginBottom: 20,
    textTransform: 'capitalize'
  },
  buttonHint: {
    marginTop: 5,
    color: 'red',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  }
});
