import { useContext } from "react";
import { Formik, Field, Form } from 'formik';
import Question from "./QuestionTEMP";
import { QuizContext } from "../../contexts/quizTemperamento";
import "./quiz.css";


const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <p>
            Por favor llenar los datos del formulario para poder tomar la prueba de temperamento.
          </p>
          <br></br>
          <Formik
            initialValues={{
              nombre: '',
              apellido: '',
              dpi: '',
            }}
            onSubmit={async (values) => {
              console.log(values)
              await new Promise((r) => setTimeout(r, 500));
              alert("Tiene que llenar todo el formulario");
            }}
          >
            <Form>
              <label htmlFor="nombre">Nombre</label>
              <br></br>
              <Field id="nombre" name="nombre" />
              <br></br>
              <br></br>
              <label htmlFor="apellido">Apellido</label>
              <br></br>
              <Field id="apellido" name="apellido" />
              <br></br>
              <br></br>
              <label htmlFor="dpi">DPI</label>
              <br></br>
              <Field id="dpi" name="dpi" maxLength="13" />
              <br></br>
              <br></br>
              <button type="submit" className="next-button">Comenzar prueba</button>
            </Form>
          </Formik>
        </div>
        // <div>
        //   <div className="score">
        //     Question {quizState.currentQuestionIndex + 1}/
        //     {quizState.questions.length}
        //   </div>
        //   <Question />
        //   {quizState.currentAnswer && (
        //     <div
        //       onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        //       className="next-button"
        //     >
        //       Next question
        //     </div>
        //   )}
        // </div>
      )}
    </div>
  );
};

export default Quiz;