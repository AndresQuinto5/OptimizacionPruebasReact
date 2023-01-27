import React from "react";
import Quiz from '../Temperamento/quizTEMP';
import { QuizProvider } from "../../contexts/quiz";
import { QuizProviderTIE } from "../../contexts/quizTIE";
import QuizTIE from "../TIE/quizTIE";

function final() {
    return(
        <div>
            <QuizProviderTIE>
                <QuizTIE />
            </QuizProviderTIE>
        </div>
    )
}

export default final