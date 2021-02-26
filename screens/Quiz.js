import React from 'react';

import { useSelector } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native';

import { useQuiz } from '../hooks/useQuiz';

export default ({ route }) => {
  const deckId = route.params.deckId;

  const questions = useSelector(({ questions, decks }) => {
    const deckQuestions = decks[deckId].questions;
    return deckQuestions.map((questionId) => questions[questionId]);
  });

  const [currentIndex, score, questionCard, reachedEnd] = useQuiz(questions);

  return (
    <View style={styles.container}>
      { !reachedEnd && <View style={styles.progressContainer}>
          <Text style={styles.progressContainerTitle}>Progress</Text>
          <Text style={styles.progress}>{currentIndex} / {questions.length}</Text>
        </View> }
      { !reachedEnd && questionCard }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  progressContainerTitle: {
    fontSize: 30
  },
  progress: {
    fontSize: 20,
  }
});
