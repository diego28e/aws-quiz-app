// src/components/QuizComponent.jsx

import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const QuizComponent = ({ questions, onQuizEnd }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [hasTimeUpOccurred, setHasTimeUpOccurred] = useState(false);

  useEffect(() => {
    // Shuffle the options for each question when component mounts
    const shuffled = questions.map((question) => {
      return {
        ...question,
        options: shuffleArray([...question.options]),
      };
    });
    setShuffledQuestions(shuffled);
  }, [questions]);

  useEffect(() => {
    if (showFeedback || hasTimeUpOccurred) return; // Stop the timer when feedback is shown or time-up occurred
  
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          // Time's up
          handleTimeUp();
          return 0;
        }
      });
    }, 1000);
  
    return () => clearInterval(interval);
  }, [currentQuestion, showFeedback, hasTimeUpOccurred]);
  

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleAnswerSelect = (index) => {
    const questionType = currentQuizQuestion.type;
    if (questionType === "single") {
      setSelectedAnswers([index]);
      setError("");
    } else if (questionType === "multiple") {
      setSelectedAnswers((prevSelected) => {
        if (prevSelected.includes(index)) {
          // Deselect the option
          const newSelected = prevSelected.filter((i) => i !== index);
          setError(""); // Clear error when an option is deselected
          return newSelected;
        } else {
          if (prevSelected.length >= 2) {
            setError("You can only choose two options.");
            return prevSelected; // Do not add the new selection
          } else {
            const newSelected = [...prevSelected, index];
            setError(""); // Clear error if selection is valid
            return newSelected;
          }
        }
      });
    }
  };
  
  const handleSubmit = () => {
    const requiredAnswersCount =
    currentQuizQuestion.type === "multiple" ? 2 : 1;
  
  if (selectedAnswers.length !== requiredAnswersCount) {
    setError(
      `Please select exactly ${requiredAnswersCount} option${
        requiredAnswersCount > 1 ? "s" : ""
      } before submitting.`
    );
    return;
  }

    setShowFeedback(true);
    setError("");
    setHasTimeUpOccurred(false); // Reset the time-up flag

    // Determine the correct answers
    const correctAnswers = [];
    const numCorrectOptions =
      currentQuizQuestion.type === "multiple" ? 2 : 1;
    for (let i = 0; i < numCorrectOptions; i++) {
      const correctOption = questions[currentQuestion].options[i];
      const correctIndex = shuffledQuestions[currentQuestion].options.findIndex(
        (option) => option === correctOption
      );
      correctAnswers.push(correctIndex);
    }

    // Calculate the score for this question
    let questionScore = 0;
    selectedAnswers.forEach((answerIndex) => {
      if (correctAnswers.includes(answerIndex)) {
        questionScore += 1;
      }
    });

    setScore((prev) => prev + questionScore);

    // Check if this is the last question
    if (currentQuestion === questions.length - 1) {
      handleQuizEnd();
    }
  };

  const handleTimeUp = () => {
    setShowFeedback(true);
    setError("");
    setHasTimeUpOccurred(true); // Indicate that time-up has occurred
  };
  
  

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
      setTimer(60); // Reset the timer for the next question
      setError("");
      setHasTimeUpOccurred(false); // Reset the time-up flag
    } else {
      handleQuizEnd();
    }
  };

  const handleQuizEnd = () => {
    setQuizFinished(true);
  };

  const handleReturnToMenu = () => {
    // Reset all state
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setError("");
    setTimer(30);
    setScore(0);
    setQuizFinished(false);
    setShuffledQuestions([]);
    onQuizEnd(); // Notify parent to return to menu
  };

  const currentQuizQuestion = shuffledQuestions[currentQuestion];

  // Calculate total possible points
  const totalPossiblePoints = questions.reduce((total, question) => {
    return total + (question.type === "multiple" ? 2 : 1);
  }, 0);

  // Determine the correct answers
  let correctAnswers = [];
  if (currentQuizQuestion) {
    const numCorrectOptions =
      currentQuizQuestion.type === "multiple" ? 2 : 1;
    for (let i = 0; i < numCorrectOptions; i++) {
      const correctOption = questions[currentQuestion].options[i];
      const correctIndex = shuffledQuestions[currentQuestion].options.findIndex(
        (option) => option === correctOption
      );
      correctAnswers.push(correctIndex);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-theme-color-primary to-theme-color-primary-dark rounded-lg shadow-lg quiz-box">
      {!quizFinished && currentQuizQuestion ? (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-theme-color-base mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <div className="w-full bg-theme-color-base-dark rounded-full h-2.5">
              <div
                className="bg-theme-color-secondary h-2.5 rounded-full"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <h3
              className="text-xl font-semibold text-theme-color-base mb-4"
              aria-label={`Question: ${currentQuizQuestion.question}`}
            >
              {currentQuizQuestion.question}
            </h3>
            <div className="space-y-3">
              {currentQuizQuestion.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-3 rounded-md transition-all cursor-pointer ${
                    selectedAnswers.includes(index)
                      ? "bg-yellow-300 text-theme-color-primary"
                      : "bg-theme-color-base-dark text-theme-color-base hover:bg-theme-color-secondary hover:text-theme-color-primary"
                  } ${
                    showFeedback
                      ? correctAnswers.includes(index)
                        ? "bg-green-500 text-white"
                        : selectedAnswers.includes(index)
                        ? "bg-red-500 text-white"
                        : ""
                      : ""
                  }`}
                >
                  <input
                    type={
                      currentQuizQuestion.type === "multiple"
                        ? "checkbox"
                        : "radio"
                    }
                    name="quiz-option"
                    value={index}
                    checked={selectedAnswers.includes(index)}
                    onChange={() => handleAnswerSelect(index)}
                    className="sr-only"
                    aria-label={`Option ${index + 1}: ${option}`}
                  />
                  <span className="flex-1">{option}</span>
                  {showFeedback && correctAnswers.includes(index) && (
                    <FaCheck className="text-green-700 ml-2" />
                  )}
                  {showFeedback &&
                    !correctAnswers.includes(index) &&
                    selectedAnswers.includes(index) && (
                      <FaTimes className="text-red-700 ml-2" />
                    )}
                </label>
              ))}
            </div>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex justify-between items-center">
          <button
  onClick={handleSubmit}
  className={`bg-theme-color-secondary text-theme-color-primary font-bold py-2 px-4 rounded-md ${
    !showFeedback && !error
      ? "hover:bg-theme-color-secondary-dark cursor-pointer"
      : "opacity-50 cursor-not-allowed"
  } transition-colors focus:outline-none focus:ring-2 focus:ring-theme-color-secondary focus:ring-opacity-50`}
  disabled={showFeedback || !!error}
>
  Submit
</button>

            {showFeedback && currentQuestion < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="bg-theme-color-neutral text-white font-bold py-2 px-4 rounded-md hover:bg-theme-color-neutral-dark transition-colors focus:outline-none focus:ring-2 focus:ring-theme-color-neutral focus:ring-opacity-50"
              >
                Next Question
              </button>
            )}
            {showFeedback && currentQuestion === questions.length - 1 && (
              <button
                onClick={handleQuizEnd}
                className="bg-theme-color-neutral text-white font-bold py-2 px-4 rounded-md hover:bg-theme-color-neutral-dark transition-colors focus:outline-none focus:ring-2 focus:ring-theme-color-neutral focus:ring-opacity-50"
              >
                Finish Quiz
              </button>
            )}
            <div className="text-theme-color-base text-xl font-bold">
              {timer}s
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-theme-color-base mb-4">
            Quiz Finished!
          </h2>
          <p className="text-xl text-theme-color-base mb-2">
            Total Score: {score} / {totalPossiblePoints}
          </p>
          <p className="text-xl text-theme-color-base mb-4">
            Score Percentage:{" "}
            {totalPossiblePoints
              ? ((score / totalPossiblePoints) * 100).toFixed(2)
              : 0}
            %
          </p>
          <button
            onClick={handleReturnToMenu}
            className="bg-theme-color-secondary text-theme-color-primary font-bold py-2 px-4 rounded-md hover:bg-theme-color-secondary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-theme-color-secondary focus:ring-opacity-50"
          >
            Return to Main Menu
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
