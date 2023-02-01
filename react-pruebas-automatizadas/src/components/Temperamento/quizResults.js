import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

const QuizResults = ({ quizState }) => {
  const data = {
    labels: ["Sanguineo", "Colerico", "Melancolico", "Flematico"],
    datasets: [
      {
        data: [
          (quizState.sangineoAnswers / 2) * 2.5,
          (quizState.colericoAnswers / 2) * 2.5,
          (quizState.melancolicoAnswers / 2) * 2.5,
          (quizState.flematicoAnswers / 2) * 2.5
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00a65a"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00a65a"]
      }
    ]
  };

  return (
    <div>
      <h2>Quiz Results</h2>
      <Pie data={data} />
    </div>
  );
};

export default QuizResults;
