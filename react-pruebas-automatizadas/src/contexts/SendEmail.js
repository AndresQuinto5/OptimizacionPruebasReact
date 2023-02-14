import QuizTIE from "../components/TIE/quizTIE";
import Quiz from "../components/Temperamento/quizTEMP";
import emailjs from '@emailjs/browser';


/*
export const printTemplateParams = () => {
    const { templateParams } = QuizTIE();
    console.log("hola",templateParams);
    };
 */   




export function ArrayTemperamento(a){
    var arrayTemp = Object.assign({}, a);
    console.log("sucess")
    console.log(arrayTemp)
    
    return (arrayTemp)
}

export function ArrayTIE(a){
    var arrayTIE = Object.assign({}, a);
    console.log("sucess")
    console.log(arrayTIE)

    return (arrayTIE)
}

export function mergeArrays(arrayTemp,arrayTIE) {

    var templateFinal = Object.assign({}, arrayTemp, arrayTIE);
    console.log("sucess")
    console.log(templateFinal)
}

export function sendEmail(templateParams2) {
    emailjs.send('service_ljon6t8', 'template_9shod4j', templateParams2, 'dw7yxB6O6v4NSfxS0')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    }
    
export function alo() {
    console.log("hola");
    }