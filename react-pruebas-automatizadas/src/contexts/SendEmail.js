import QuizTIE from "../components/TIE/quizTIE";
import Quiz from "../components/Temperamento/quizTEMP";
import emailjs from '@emailjs/browser';
import { store } from './store';

/*

    Este archivo de js, maneja la funcion de send email, la cual se encarga de enviar un email con los resultados
    de todos los test en un array llamado: arrayFinal

*/

export function sendEmail() {
    const state = store.getState();
    const templateFinal = state.templateFinal;

    emailjs.send('service_i75e10h', 'template_skh5pei', templateFinal, 'c6LVdGvVPY8iMQmhO')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    }
        