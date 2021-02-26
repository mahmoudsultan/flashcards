export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK';

export const receiveDecks = (decks) => ({
  type: RECEIVE_DECKS,
  decks,
});

export const addDeck = (deck) => ({
  type: ADD_DECK,
  deck,
});

export const addQuestionToDeck = (deckId, questionId) => ({
  type: ADD_QUESTION_TO_DECK,
  deckId,
  questionId,
});
