// src/components/MainMenu.jsx

import React from "react";

const MainMenu = ({ questionnaires, onSelect }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-theme-color-primary to-theme-color-primary-dark rounded-lg shadow-lg menu-box">
      <h1 className="text-4xl font-bold text-center text-theme-color-base mb-8">
        AWS Quiz App
      </h1>
      <div className="space-y-4">
        {questionnaires.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => onSelect(quiz)}
            className="w-full bg-theme-color-secondary text-theme-color-primary font-semibold py-3 px-4 rounded-md hover:bg-theme-color-secondary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-theme-color-secondary focus:ring-opacity-50"
          >
            {quiz.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
