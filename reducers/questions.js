import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions';

const questionsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      const currentNumberOfQuestions = state.numberOfQuestions;
      const { questionId, question } = action;

      return {
        ...state,
        [questionId]: question,
        numberOfQuestions: currentNumberOfQuestions + 1,
      }
    default:
      return state;
  }
};

export default questionsReducer;
