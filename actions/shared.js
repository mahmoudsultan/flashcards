import * as initialData from '../api/mockData.json';

import { receiveDecks, addQuestionToDeck } from './decks';
import { receiveQuestions, addQuestion } from './questions';

export const getInitialData = () => {
  const decks = initialData.decks;
  const questions = initialData.questions;

  return (dispatch) => {
    dispatch(receiveDecks(decks));
    dispatch(receiveQuestions(questions));
  }
};

export const newQuestion = (deckId, question) => (dispatch, getState) => {
  const { questions: { numberOfQuestions } } = getState();

  const questionId = `${numberOfQuestions + 1}`;

  dispatch(addQuestion(questionId, question));
  dispatch(addQuestionToDeck(deckId, questionId));
};
