
const pregunta = "Seleccione una palabra de las cuatro opciones mostradas en pantalla, si no sabe el significado de alguna palabra, consulte un diccionario o pregunta antes de contestar. "

const data = [
    {
      question: pregunta,
      incorrectAnswers: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
  
    {
      question:
      pregunta,
      incorrectAnswers: [
        "In the <body> section",
        "At the end of the document",
        "You can't refer to an external style sheet",
      ],
      correctAnswer: "In the <head> section",
    },
    {
      question: pregunta,
      incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
      correctAnswer: "<style>",
    },
    {
      question: pregunta,
      incorrectAnswers: ["class", "font", "styles"],
      correctAnswer: "style",
    },
    {
      question: pregunta,
      incorrectAnswers: [
        "{body:color=black;}",
        "{body;color:black;}",
        "body:color=black;",
      ],
      correctAnswer: "body {color: black;}",
    },
    {
      question: pregunta,
      incorrectAnswers: [
        "' this is a comment",
        "// this is a comment",
        "// this is a comment //",
      ],
      correctAnswer: "/* this is a comment */",
    },
    {
      question: pregunta,
      incorrectAnswers: ["color", "bgcolor", "bgColor"],
      correctAnswer: "background-color",
    },
    {
      question: pregunta,
      incorrectAnswers: [
        "all.h1 {background-color:#FFFFFF;}",
        "h1.setAll {background-color:#FFFFFF;}",
        "h1.all {background-color:#FFFFFF;}",
      ],
      correctAnswer: "h1 {background-color:#FFFFFF;}",
    },
  ];
  


  export default data;