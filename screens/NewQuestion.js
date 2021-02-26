import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Text, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput, Button } from '../components/atoms';
import { newQuestion } from '../actions/shared';

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  const deckId = route.params.deckId;

  const [questionTitle, setQuestionTitle] = useState('');
  const [questionAnswer, setQuestionAnswer] = useState('');

  const handleAddQuestion = useCallback(() => {
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
});
