import * as initialData from '../api/mockData.json';

import { receiveDecks } from './decks';
import { receiveQuestions } from './questions';

export const getInitialData = () => {
  const decks = initialData.decks;
  const questions = initialData.questions;

  return (dispatch) => {
    dispatch(receiveDecks(decks));
    dispatch(receiveQuestions(questions));
  }
};
