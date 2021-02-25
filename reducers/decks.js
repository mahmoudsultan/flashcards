import { RECEIVE_DECKS, ADD_DECK } from '../actions/decks';

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
    default:
      return state;
  }
}

export default decksReducer;
