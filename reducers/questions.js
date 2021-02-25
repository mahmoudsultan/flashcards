const { RECEIVE_QUESTIONS } = require("../actions/questions");

const questionsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
};

export default questionsReducer;
