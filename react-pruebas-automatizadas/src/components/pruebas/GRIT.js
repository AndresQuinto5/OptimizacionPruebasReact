import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import QuizGRIT from '../GRIT/quizGRIT';
import { QuizProviderGRIT } from '../../contexts/quizGRIT';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './GRIT.css';

const FinalGRIT = () => {
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
  return (
    <div>
      <CSSTransition
        in={!showQuiz}
        timeout={300}
        classNames="instructions"
        unmountOnExit
      >
        <div className="instructions">
          <h2>Instrucciones</h2>
          <p>Lee cuidadosamente cada pregunta y opción de respuesta, 
            eligiendo la opción con la que más se identifica.</p>
          <button className='start-button'
          onClick={() => setShowQuiz(true)}>Empezar</button>
          </div>
      </CSSTransition>
      {showQuiz && (
        <QuizProviderGRIT>
          <QuizGRIT />
        </QuizProviderGRIT>
      )}
    </div>
  );
};

export default FinalGRIT;
