import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import QuizComponent from "./components/QuizComponent";
import questionnaires from "./data/questionnaires";


function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleQuizEnd = () => {
    setSelectedQuiz(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center main-menu">
      {!selectedQuiz ? (
        <MainMenu
          questionnaires={questionnaires}
          onSelect={handleSelectQuiz}
        />
      ) : (
        <QuizComponent
          questions={selectedQuiz.questions}
          onQuizEnd={handleQuizEnd}
        />
      )}
    </div>
  );
};

export default App;