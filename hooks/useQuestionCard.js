import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';

export const useQuestionCard = (questions, { initialIndex = 0, initialProps = {} } = {}) => {
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
};
