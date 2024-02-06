import React, { useState } from "react";
import { Button, Stack, Text } from "@chakra-ui/react";
import QuizHome from "../components/quiz/QuizHome";
import QuizSession from "../components/quiz/QuizSession";

const Quiz = () => {
  const [isQuizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => setQuizStarted(true);

  if (isQuizStarted) return <QuizSession />;

  return <QuizHome handleStart={handleStartQuiz} />;
};

export default Quiz;
