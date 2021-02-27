import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_CACHE_DATA_KEY } from '../lib/asyncStorage';

import * as initialData from '../api/mockData.json';

import { receiveDecks, addQuestionToDeck } from './decks';
import { receiveQuestions, addQuestion } from './questions';

export const getInitialData = () => {
  const decks = initialData.decks;
  const questions = initialData.questions;

  return async (dispatch) => {
    const cachedData = JSON.parse(await AsyncStorage.getItem(ASYNC_STORAGE_CACHE_DATA_KEY));

    if (cachedData) {
      dispatch(receiveDecks(cachedData.decks));
      dispatch(receiveQuestions(cachedData.questions));
    } else {
      dispatch(receiveDecks(decks));
      dispatch(receiveQuestions(questions));
    }
  }
};

export const newQuestion = (deckId, question) => (dispatch, getState) => {
  const { questions: { numberOfQuestions } } = getState();

  const questionId = `${numberOfQuestions + 1}`;

  dispatch(addQuestion(questionId, question));
  dispatch(addQuestionToDeck(deckId, questionId));
};
