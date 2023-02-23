import React from "react";
import QuizCAM from '../Cambridge/quizCAM';
import { QuizProviderCAM } from "../../contexts/quizCAM";

function final() {
    return(
        <div>
            <QuizProviderCAM>
                <QuizCAM />
            </QuizProviderCAM>
        </div>
    )
}

export default final