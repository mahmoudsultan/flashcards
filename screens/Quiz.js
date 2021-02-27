import React from 'react';

import { useSelector } from 'react-redux';
import { useQuiz } from '../hooks/useQuiz';

import { View, Text, StyleSheet } from 'react-native';
import QuizResultsCard from '../components/QuizResultsCard';

import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Button } from '../components/atoms';

export default ({ navigation, route }) => {
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
      { reachedEnd && <Animatable.View animation="tada">
        <QuizResultsCard score={score} numberOfQuestions={questions.length}>
          <Button
            onPress={() => navigation.push('Quiz', { deckId })}
            style={ { backgroundColor: 'white', alignItems: 'center' } }
          >
            <Text style={ { fontSize: 15, color: 'black' } }>
              <Ionicons name="md-arrow-redo" size={15} color="black" />
              Start Again!
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
        </QuizResultsCard>
      </Animatable.View> }
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
