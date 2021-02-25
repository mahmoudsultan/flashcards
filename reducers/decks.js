import { RECEIVE_DECKS } from '../actions/decks';

const decksReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    default:
      return state;
  }
}

export default decksReducer;
