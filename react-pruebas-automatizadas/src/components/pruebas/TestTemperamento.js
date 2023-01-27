import React from "react";
import Quiz from '../Temperamento/quizTEMP';
import { QuizProvider } from "../../contexts/quiz";

function final() {
    return(
        <div>
            <h2>Test de temperamento</h2>
            <QuizProvider>
                <Quiz />
            </QuizProvider>
        </div>
    )
}

export default final