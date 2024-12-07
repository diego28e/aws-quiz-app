// src/components/QuizComponent.jsx

import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const QuizComponent = ({ questions, onQuizEnd }) => {
  // Add a piece of state to store the selected mode
  const [selectedMode, setSelectedMode] = useState(null); // 'practice' or 'exam'

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [error, setError] = useState("");

  // Initialize timer based on mode (exam=60 seconds per question, practice=no timer)
  const [timer, setTimer] = useState(selectedMode === "exam" ? 60 : null);

  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [hasTimeUpOccurred, setHasTimeUpOccurred] = useState(false);

  useEffect(() => {
    // Only shuffle if we have questions and selectedMode chosen
    if (questions && questions.length > 0 && selectedMode) {
      const shuffled = questions.map((question) => {
        return {
          ...question,
          options: shuffleArray([...question.options]),
        };
      });
      setShuffledQuestions(shuffled);
    }
  }, [questions, selectedMode]);

  useEffect(() => {
    // Run the timer only if exam mode is selected and feedback/time-up hasn't occurred
    if (
      selectedMode === "exam" &&
      !showFeedback &&
      !hasTimeUpOccurred &&
      !quizFinished &&
      shuffledQuestions.length > 0
    ) {
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
    }
  }, [
    currentQuestion,
    showFeedback,
    hasTimeUpOccurred,
    quizFinished,
    selectedMode,
    shuffledQuestions,
  ]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    // Set timer if exam mode
    if (mode === "exam") {
      setTimer(60);
    } else {
      setTimer(null);
    }
  };

  const currentQuizQuestion = shuffledQuestions[currentQuestion];

  const handleAnswerSelect = (index) => {
    const questionType = currentQuizQuestion.type;
    if (questionType === "single") {
      setSelectedAnswers([index]);
      setError("");
    } else if (questionType === "multiple") {
      // multiple means must select exactly 2
      setSelectedAnswers((prevSelected) => {
        if (prevSelected.includes(index)) {
          const newSelected = prevSelected.filter((i) => i !== index);
          setError("");
          return newSelected;
        } else {
          if (prevSelected.length >= 2) {
            setError("You can only choose two options.");
            return prevSelected;
          } else {
            const newSelected = [...prevSelected, index];
            setError("");
            return newSelected;
          }
        }
      });
    } else if (questionType === "multiple3") {
      // multiple3 means must select exactly 3
      setSelectedAnswers((prevSelected) => {
        if (prevSelected.includes(index)) {
          const newSelected = prevSelected.filter((i) => i !== index);
          setError("");
          return newSelected;
        } else {
          if (prevSelected.length >= 3) {
            setError("You can only choose three options.");
            return prevSelected;
          } else {
            const newSelected = [...prevSelected, index];
            setError("");
            return newSelected;
          }
        }
      });
    }
  };

  const handleSubmit = () => {
    if (!currentQuizQuestion) return;

    // Determine required number of correct answers based on type
    let requiredAnswersCount = 1;
    if (currentQuizQuestion.type === "multiple") requiredAnswersCount = 2;
    if (currentQuizQuestion.type === "multiple3") requiredAnswersCount = 3;

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

    // Determine the correct answers based on question type
    let numCorrectOptions = 1;
    if (currentQuizQuestion.type === "multiple") numCorrectOptions = 2;
    if (currentQuizQuestion.type === "multiple3") numCorrectOptions = 3;

    const correctAnswers = [];
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
    // Only matters if exam mode
    if (selectedMode === "exam") {
      setShowFeedback(true);
      setError("");
      setHasTimeUpOccurred(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
      setError("");
      setHasTimeUpOccurred(false);
      if (selectedMode === "exam") {
        setTimer(60); // reset timer only if exam mode
      }
    } else {
      handleQuizEnd();
    }
  };

  const handleQuizEnd = () => {
    setQuizFinished(true);
  };

  const handleReturnToMenu = () => {
    // Reset all state back to initial
    setSelectedMode(null);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setError("");
    setTimer(selectedMode === "exam" ? 60 : null);
    setScore(0);
    setQuizFinished(false);
    setShuffledQuestions([]);
    if (onQuizEnd) onQuizEnd();
  };

  // Calculate total possible points
  const totalPossiblePoints = questions.reduce((total, question) => {
    if (question.type === "multiple") return total + 2;
    if (question.type === "multiple3") return total + 3;
    return total + 1;
  }, 0);

  // Determine the correct answers for UI feedback
  let correctAnswersForUI = [];
  if (currentQuizQuestion) {
    let numCorrectOptions = 1;
    if (currentQuizQuestion.type === "multiple") numCorrectOptions = 2;
    if (currentQuizQuestion.type === "multiple3") numCorrectOptions = 3;

    for (let i = 0; i < numCorrectOptions; i++) {
      const correctOption = questions[currentQuestion].options[i];
      const correctIndex = shuffledQuestions[currentQuestion].options.findIndex(
        (option) => option === correctOption
      );
      correctAnswersForUI.push(correctIndex);
    }
  }

  // If no mode selected yet, show mode selection buttons with tooltips
  if (!selectedMode) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-theme-color-primary to-theme-color-primary-dark rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-theme-color-base mb-4">
          Select Mode
        </h2>
        <div className="flex space-x-4 justify-center">
          <div className="relative group">
            <button
              onClick={() => handleModeSelect("practice")}
              className="bg-theme-color-neutral text-white font-bold py-2 px-4 rounded-md hover:bg-theme-color-neutral-dark transition-colors focus:outline-none focus:ring-2 focus:ring-theme-color-neutral focus:ring-opacity-50"
            >
              Practice Mode
            </button>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-sm p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center z-10">
              Practice mode has no time limit.
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => handleModeSelect("exam")}
              className="bg-theme-color-secondary text-theme-color-primary font-bold py-2 px-4 rounded-md hover:bg-theme-color-secondary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-theme-color-secondary focus:ring-opacity-50"
            >
              Exam Mode
            </button>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-sm p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center z-10">
              Exam mode has a time limit for each question.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Once mode is selected, proceed with the original quiz rendering
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
                      ? correctAnswersForUI.includes(index)
                        ? "bg-green-500 text-white"
                        : selectedAnswers.includes(index)
                        ? "bg-red-500 text-white"
                        : ""
                      : ""
                  }`}
                >
                  <input
                    type={
                      currentQuizQuestion.type === "multiple" ||
                      currentQuizQuestion.type === "multiple3"
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
                  {showFeedback && correctAnswersForUI.includes(index) && (
                    <FaCheck className="text-green-700 ml-2" />
                  )}
                  {showFeedback &&
                    !correctAnswersForUI.includes(index) &&
                    selectedAnswers.includes(index) && (
                      <FaTimes className="text-red-700 ml-2" />
                    )}
                </label>
              ))}
            </div>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Feedback Section: display if showFeedback is true and feedback exists */}
          {showFeedback &&
            currentQuizQuestion.feedback &&
            currentQuizQuestion.feedback.length > 0 && (
              <div className="mb-4 mt-4 border-t border-theme-color-base-dark pt-4">
                <h4 className="text-lg font-semibold text-theme-color-base mb-2">
                  Learn More:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {currentQuizQuestion.feedback.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#fde047] underline hover:text-[#f59e0b]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
            {selectedMode === "exam" && (
              <div className="text-theme-color-base text-xl font-bold">
                {timer}s
              </div>
            )}
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
