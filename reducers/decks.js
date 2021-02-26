import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION_TO_DECK } from '../actions/decks';

const decksReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case ADD_DECK:
      return { 
        ...state,
        [action.deck]: { 
          numberOfQuestions: 0,
          questions: [] 
        } 
      };
    case ADD_QUESTION_TO_DECK:
      return {
        ...state,
        [action.deckId]: {
          numberOfQuestions: state[action.deckId].numberOfQuestions + 1,
          questions: [
            ...state[action.deckId].questions,
            action.questionId,
          ],
        },
      };
    default:
      return state;
  }
}

export default decksReducer;
