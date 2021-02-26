import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native';
import { useQuiz } from '../hooks/useQuiz';

export default ({ route }) => {
  const deckId = route.params.deckId;

  const questions = useSelector(({ questions, decks }) => {
    const deckQuestions = decks[deckId].questions;
    return deckQuestions.map((questionId) => questions[questionId]);
  });

  const [score, questionCard, reachedEnd] = useQuiz(questions);

  return (
    <View style={styles.container}>
      <Text>{ score }</Text>
      { !reachedEnd && questionCard }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
