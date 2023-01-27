import React from "react";
import Card from "./card";
import "./StartingPage.css";

import Quiz from '../Temperamento/quizTEMP';
import { QuizProvider } from "../../contexts/quiz";



const StartingPage = () => {
    return (
    <QuizProvider>
        <Quiz />
    </QuizProvider>

    )
}

export default StartingPage;