import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import QuizTIE from '../TIE/quizTIE';
import { QuizProviderTIE } from '../../contexts/quizTIE';
import './TIE.css';

const Final = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const complete = useSelector((state) => state.complete);

  if (complete === false) {
    return (
      <div>
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
            eligiendo la opción que mejor se adapte a cómo se siente o cómo actúa en una situación determinada.</p>
          <button className='start-button'
          onClick={() => setShowQuiz(true)}>Empezar</button>
        </div>
      </CSSTransition>
      {showQuiz && (
        <QuizProviderTIE>
          <QuizTIE />
        </QuizProviderTIE>
      )}
    </div>
  );
};

export default Final;
