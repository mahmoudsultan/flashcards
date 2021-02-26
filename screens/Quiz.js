import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { View, Text } from 'react-native';
import QuestionCard from '../components/QuestionCard';

const useQuestionCard = (questions, { initialIndex = 0, initialProps = {} } = {}) => {
  const [questionCard, setQuestionCard] = useState(questions[currentIndex]);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [props, setProps] = useState(initialProps);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    if (questions[currentIndex]) {
      setQuestionCard(<QuestionCard question={questions[currentIndex]} { ...props } />)
    } else {
      setReachedEnd(true);
    }
  }, [currentIndex, props]);

  return [questionCard, reachedEnd, setCurrentIndex, setProps];
}

export default ({ route }) => {
  const deckId = route.params.deckId;

  const questions = useSelector(({ questions, decks }) => {
    const deckQuestions = decks[deckId].questions;
    return deckQuestions.map((questionId) => questions[questionId]);
  });

  const [score, setScore] = useState(0);

  const [questionCard, reachedEnd, setCurrentIndex, setProps] = useQuestionCard(questions);

  const isCorrectAnswer = useCallback(() => {
    setScore((score) => score + 1);
    setCurrentIndex((index) => (index + 1));
  }, [setScore]);

  const isWrongAnswer = useCallback(() => {
    setCurrentIndex((index) => (index + 1));
  }, []);

  useEffect(() => {
    setProps({ isCorrectAnswer, isWrongAnswer });
  }, [isCorrectAnswer, isWrongAnswer]);

  return (
    <View>
      <Text>{ score }</Text>
      { !reachedEnd && questionCard }
    </View>
  );
};
