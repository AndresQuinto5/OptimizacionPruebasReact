

const dataTIE = [
    {
    question: "Pienso que merece la pena prestar atención a mis emociones y estados de ánimo.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEPP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Logro identificar mis percepciones e interpretaciones ante un acontecimiento.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Dejo que mis sentimientos afecten a mis pensamientos.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    
    {
    question: "Si estoy estresado, pienso en todo lo que me falta por hacer y me bloqueo.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "TAE", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Tengo dificultad para completar tareas a largo plazo.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Logro reconocer la angustia en los demás.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEEO", competencia: "Empatía"},
    ],
    },/*
    {
    question: "Tengo dificultad para calcular el impacto que mi comportamiento tiene sobre los demás.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "CEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "Logro proporcionar apoyo y consejo a los demás cuando sea necesario.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Es difícil para mí comenzar cosas nuevas.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Resolver conflictos, me hace sentir desmotivado.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Tengo dificultad para comunicar sentimientos de modo eficaz.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Logro influir sobre los demás de forma directa o indirecta.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Felicito a las personas cuando han hecho algo bueno.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Cuando estoy en desacuerdo con alguien, soy capaz de decirlo en forma tranquila.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Logro producir energía positiva cuando realizo un trabajo poco interesante.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Aunque a veces me siento triste, suelo tener una visión optimista.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Si estoy enfadado, pienso mucho en lo sucedido, dándole vueltas a las cosas.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Frecuentemente puedo definir mis sentimientos.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "¿Qué emoción está expresando?",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Puedo llegar a comprender mis sentimientos.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Si estoy enfadado, trato de calmarme inmediatamente.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Ante situaciones de presión logro mantener la calma.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "TAE", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Generalmente cumplo con lo que me propongo.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Puedo percibir lo que sienten otras personas.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "Puedo mostrar comprensión hacia los demás.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "CEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "Ayudo a las personas a sentirse mejor cuando están tristes.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Es difícil para mí hacer cambios en general.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Logro mediar en los conflictos de los demás.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Me cuesta entender los mensajes no verbales de las personas.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Soy capaz de influir positivamente en los sentimientos de alguien, que está pasando por un mal momento.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Prefiero un trabajo en donde me digan exactamente qué hacer.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Puedo decir como las personas se están sintiendo, con solo escuchar el tono de su voz.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "La mayoría de las cosas que intento, espero hacerlas bien.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Cada día que empieza …Me preocupo por tener un buen estado de ánimo.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Tengo dificultad para trabajar de modo productivo cuando estoy enfadado.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Casi siempre sé cómo me siento.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "¿Qué emoción está expresando?",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Logro identificar mi dialogo interior.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Tengo dificultad para tranquilizarme rápido cuando estoy enojado.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Logro actuar de modo productivo en situaciones de ansiedad.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "TAE", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Me motivo a mí mismo, imaginando un buen resultado de las tareas que realizo.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Logro detectar con facilidad la necesidad de otra persona.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "Logro detectar congruencias entre las emociones o sentimientos de los demás y sus conductas.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "CEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "En lo personal prefiero realizar el trabajo solo, que de forma colaborativa.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Me es difícil cambiar de opinión acerca de las cosas.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Me gusta tener un panorama general de un problema antes de intentar resolverlo.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Soy consciente de los mensajes no verbales que proyecto a las otras personas.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Tengo dificultad para expresar mis ideas ante otros.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Prefiero que otros tomen las decisiones.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Me es fácil encontrar las palabras apropiadas para comunicar lo que pienso o siento.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Cuando me enfrento a un desafío, me rindo porque creo que fallaré.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Se me dificulta utilizar mi diálogo interior para controlar mis estados emocionales.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Tengo dificultad para mantener la calma cuando soy el blanco del enojo de otros.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "A menudo me doy cuenta de mis sentimientos en diferentes situaciones.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "¿Qué emoción está expresando?",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Tengo capacidad para identificar la información que influye sobre mis percepciones o interpretaciones.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "En una discusión acalorada, siempre intento mostrar mi enfado para que la otra persona comprenda lo mal que me siento.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Se me hace difícil trabajar bien bajo estrés.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "TAE", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Utilizo el buen humor para ayudarme a mí mismo a seguir intentando enfrentar los obstáculos.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Reconozco las emociones que otras personas están experimentando, con solo ver sus expresiones faciales.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "Tengo dificultad para dar importancia a lo que a otros preocupa.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "CEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "Considero que el trabajo colaborativo ayuda a la resolución de problemas.",
    answers: [
    { answer: "Nada de acuerdo", value: 0  , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Es fácil para mi ajustarme a nuevas condiciones.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Por lo general me atoro cuando pienso en distintas maneras de resolver problemas.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Se utilizar técnicas de comunicación interpersonal eficientes.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Cuando trabajo con otros, tiendo a depender más de sus ideas que de las mías.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Me es difícil tomar decisiones por mí mismo.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Cuando creo que tengo razón, pero la gente me lleva la contraria, insisto en mis argumentos.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "En los años anteriores he logrado pocas cosas.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Me cuesta mostrar mis sentimientos a aquellos que más me quieren.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Suelo detenerme un momento y pensar por qué estoy sintiendo una emoción en concreto.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Siempre logro Identificar los cambios fisiológicos ante el estímulo de una situación.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "¿Qué emoción está expresando?",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Identifico cuando estoy a la defensiva.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "CEP", competencia: "Autoconciencia"},
    ],
    },
    {
    question: "Mi impulsividad me ha provocado problemas con otras personas.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Siento que me es difícil controlar mi ansiedad.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "TAE", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "TAE", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Suelo perder el interés en lo que hago.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Puedo sentir el dolor emocional que otra persona está sintiendo.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "Es difícil para mí, comprender porque las personas sienten de la forma que lo hacen.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "CEEO", competencia: "Empatía"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "CEEO", competencia: "Empatía"},
    ],
    },
    {
    question: "Cuando un compañero me pide ayuda, lo hago, pero pienso que me ha retrasado en mis tareas.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "COLAB", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Me es difícil cambiar mi forma de ser.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "FYAAC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Al enfrentar un problema lo primero que hago es detenerme a pensar.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "RDC", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Cuando estoy enojado con otros, puedo decírselos sin lastimarlos.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Me es difícil decir NO, cuando no quiero.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "INFLU", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Soy más un seguidor que un líder.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "LIDER", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Acostumbro a evitar los conflictos personales, y cuando me veo en medio de uno, me pongo muy nervioso.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "COM", competencia: "Habilidades Sociales"},
    ],
    },
    {
    question: "Generalmente me siento motivado para seguir, aun cuando las cosas se pongan difíciles.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "AUTO", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Tengo fuertes impulsos que son difíciles de controlar.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Si estoy celoso de alguien me cuesta ocultarlo.",
    answers: [
    { answer: "Nada de acuerdo", value: 3 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Algo de acuerdo", value: 2 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Bastante de acuerdo", value: 1 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    { answer: "Totalmente de acuerdo", value: 0 , subcompetencia: "MEDFC", competencia: "Autocontrol"},
    ],
    },
    {
    question: "Tengo capacidad para asociar diferentes inicios físicos con emociones diversas.",
    answers: [
    { answer: "Nada de acuerdo", value: 0 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Algo de acuerdo", value: 1 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Bastante de acuerdo", value: 2 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    { answer: "Totalmente de acuerdo", value: 3 , subcompetencia: "IEP", competencia: "Autoconciencia"},
    ],
    }, */
    // ... más preguntas
    ];

  export default dataTIE;