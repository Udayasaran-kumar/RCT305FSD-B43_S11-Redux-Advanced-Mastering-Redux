import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, nextQuestion, updateScore } from "../redux/quizReducer";
import { Redirect } from "react-router-dom";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, score } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (currentQuestionIndex >= questions.length) return <Redirect to="/result" />;

  const handleAnswer = (points) => {
    dispatch(updateScore(points));
    dispatch(nextQuestion());
  };

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{questions[currentQuestionIndex]?.question}</p>
      <button onClick={() => handleAnswer(1)}>Submit</button>
      <button onClick={() => dispatch(nextQuestion())}>Skip</button>
    </div>
  );
};

export default Quiz;
