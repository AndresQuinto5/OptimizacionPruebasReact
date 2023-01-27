import React from "react";
import Quiz from '../Temperamento/quizTEMP';
import { QuizProvider } from "../../contexts/quizTemperamento";

function final() {
    return(
        <div>
            <QuizProvider>
                <Quiz />
            </QuizProvider>
        </div>
    )
}

export default final