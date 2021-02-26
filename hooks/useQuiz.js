import { useState, useEffect, useCallback } from 'react';
import { useQuestionCard } from './useQuestionCard';

export const useQuiz = (questions) => {
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

  return [score, questionCard, reachedEnd]
}
