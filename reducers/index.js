import { combineReducers } from 'redux';

import decks from './decks';
import questions from './questions';
import quizes from './quizes';

export default combineReducers({
  decks,
  questions,
  quizes,
});
