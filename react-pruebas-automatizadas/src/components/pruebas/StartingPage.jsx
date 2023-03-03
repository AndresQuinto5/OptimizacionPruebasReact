import React from "react";
import "./StartingPage.css";
import Quiz from '../Temperamento/quizTEMP';
import { QuizProvider } from "../../contexts/quizTemperamento";



const StartingPage = () => {
    return (
    <QuizProvider>
        <Quiz />
    </QuizProvider>

    )
}

export default StartingPage;