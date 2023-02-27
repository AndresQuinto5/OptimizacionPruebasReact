import React, { useState } from 'react';
import QuizCAM from '../Cambridge/quizCAM';
import { useSelector, useDispatch } from 'react-redux';
import { QuizProviderCAM } from "../../contexts/quizCAM";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';


function FinalCAM() {
    const [showQuiz, setShowQuiz] = useState(false);
    const complete = useSelector((state) => state.complete);

    if (complete === false) {
        return (
        <div className='FormAlert'>
            <FontAwesomeIcon icon={faTriangleExclamation} size="4x" color='#003660' />  
            <p>Por favor complete el formulario del componente Home primero.</p>
        </div>
        );
    }
    return(
        <div>
            <CSSTransition
                in={!showQuiz}
                timeout={300}
                classNames="instructions"
                unmountOnExit
            >
                <div className="instructions">
                <h2>Instructions</h2>
                <p>For the following questions, please choose the best option to complete the sentence or conversation.</p>
                <button className='start-button'
                onClick={() => setShowQuiz(true)}>Start</button>
                </div>
            </CSSTransition>
            {showQuiz && (
            <QuizProviderCAM>
                <QuizCAM />
            </QuizProviderCAM>
            )}
        </div>
    );
};

export default FinalCAM