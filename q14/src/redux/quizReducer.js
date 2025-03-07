import {
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    UPDATE_SCORE,
    NEXT_QUESTION,
    RESET_QUIZ,
  } from "./actionTypes";
  
  const initialState = {
    questions: [],
    loading: false,
    error: null,
    currentQuestionIndex: 0,
    score: 0,
  };
  
  export const fetchQuestions = () => async (dispatch) => {
    dispatch({ type: FETCH_QUESTIONS_REQUEST });
    try {
      const res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz");
      const data = await res.json();
      dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: "Failed to load quiz" });
    }
  };
  
  export const updateScore = (points) => ({ type: UPDATE_SCORE, payload: points });
  export const nextQuestion = () => ({ type: NEXT_QUESTION });
  export const resetQuiz = () => ({ type: RESET_QUIZ });
  
  const quizReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUESTIONS_REQUEST:
        return { ...state, loading: true };
      case FETCH_QUESTIONS_SUCCESS:
        return { ...state, loading: false, questions: action.payload };
      case FETCH_QUESTIONS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case UPDATE_SCORE:
        return { ...state, score: state.score + action.payload };
      case NEXT_QUESTION:
        return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
      case RESET_QUIZ:
        return initialState;
      default:
        return state;
    }
  };
  
  export default quizReducer;
  