
const dataCAM = [
    {
    question: "Can I park here? ",
    answers: [
    { answer: "Sorry, I did that.", value: 0, indexCAM: 0 },
    { answer: "It's the same place.", value: 0, indexCAM: 1},
    { answer: "Only for half an hour.", value: 1, indexCAM: 2 },
    ],
    },/*
    {
    question: "What colour will you paint the children's bedroom?",
    answers: [
    { answer: "I hope it was right.", value: 0, indexCAM: 0},
    { answer: "We can't decide. ", value: 1, indexCAM: 1},
    { answer: "It wasn't very difficult.", value: 0,indexCAM: 2},
    ],
    },
    {
    question: "I can't understand this email.",
    answers: [
    { answer: "Would you like some help?", value: 1, indexCAM: 0 },
    { answer: "Don't you know?", value: 0, indexCAM: 1 },
    { answer: "I suppose you can.", value: 0, indexCAM: 2 },
    ],
    },
    {
    question: "I'd like two tickets for tomorrow night.",
    answers: [
    { answer: "How much did you pay?", value: 0, indexCAM: 0},
    { answer: "Afternoon and evening.", value: 0, indexCAM: 1 },
    { answer: "I'll just check for you.", value: 1, indexCAM: 2 },
    ],
    },
    {
    question: "Shall we go to the gym now?",
    answers: [
    { answer: "I'm too tired.", value: 1, indexCAM: 0},
    { answer: "It's very good.", value: 0, indexCAM: 1 },
    { answer: "Not at all.", value: 0, indexCAM: 2 },
    ],
    },
    {
    question: "His eyes were ...... bad that he couldn't read the number plate of the car in front.",
    answers: [
    { answer: "Such", value: 0, indexCAM: 0},
    { answer: "too", value: 0, indexCAM: 1 },
    { answer: "so", value: 1, indexCAM: 2 },
    { answer: "very", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "The company needs to decide ...... and for all what its position is on this point.",
    answers: [
    { answer: "here", value: 0, indexCAM: 0 },
    { answer: "once", value: 1, indexCAM: 1 },
    { answer: "first", value: 0, indexCAM: 2 },
    { answer: "finally", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "Don't put your cup on the ...... of the table – someone will knock it off.",
    answers: [
    { answer: "outside", value: 0, indexCAM: 0 },
    { answer: "edge", value: 1, indexCAM: 1 },
    { answer: "boundary", value: 0, indexCAM: 2 },
    { answer: "border", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "I'm sorry - I didn't ...... to disturb you.",
    answers: [
    { answer: "hope", value: 0, indexCAM: 0 },
    { answer: "think", value: 0, indexCAM: 1 },
    { answer: "mean", value: 1, indexCAM: 2 },
    { answer: "suppose", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "The singer ended the concert ...... her most popular song.",
    answers: [
    { answer: "by", value: 0, indexCAM: 0 },
    { answer: "with", value: 1, indexCAM: 1 },
    { answer: "in", value: 0, indexCAM: 2 },
    { answer: "as", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "Would you mind ...... these plates a wipe before putting them in the cupboard?",
    answers: [
    { answer: "making", value: 0, indexCAM: 0 },
    { answer: "doing", value: 0, indexCAM: 1 },
    { answer: "getting", value: 0, indexCAM: 2 },
    { answer: "giving", value: 1, indexCAM: 3 },
    ],
    },
    {
    question: "I was looking forward ...... at the new restaurant, but it was closed.",
    answers: [
    { answer: "to eat", value: 0, indexCAM: 0 },
    { answer: "to have eaten", value: 0, indexCAM: 1 },
    { answer: "to eating", value: 1, indexCAM: 2 },
    { answer: "eating", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "...... tired Melissa is when she gets home from work, she always makes time to say goodnight to the children.",
    answers: [
    { answer: "Whatever", value: 0, indexCAM: 0 },
    { answer: "No matter how", value: 1, indexCAM: 1 },
    { answer: "However much", value: 0, indexCAM: 2 },
    { answer: "Although", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "It was only ten days ago ...... she started her new job.",
    answers: [
    { answer: "then", value: 0, indexCAM: 0 },
    { answer: "since", value: 0, indexCAM: 1 },
    { answer: "after", value: 0, indexCAM: 2 },
    { answer: "that", value: 1, indexCAM: 3 },
    ],
    },
    {
    question: "The shop didn't have the shoes I wanted, but they've ...... a pair specially for me.",
    answers: [
    { answer: "booked", value: 0, indexCAM: 0 },
    { answer: "ordered", value: 1, indexCAM: 1 },
    { answer: "commanded", value: 0, indexCAM: 2 },
    { answer: "asked", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "Have you got time to discuss your work now or are you ...... to leave?",
    answers: [
    { answer: "thinking", value: 0, indexCAM: 0 },
    { answer: "round", value: 0, indexCAM: 1 },
    { answer: "planned", value: 0, indexCAM: 2 },
    { answer: "about", value: 1, indexCAM: 3 },
    ],
    },
    {
    question: "She came to live here ...... a month ago.",
    answers: [
    { answer: "quite", value: 0, indexCAM: 0 },
    { answer: "beyond", value: 0, indexCAM: 1 },
    { answer: "already", value: 0, indexCAM: 2 },
    { answer: "almost", value: 1, indexCAM: 3 },
    ],
    },
    {
    question: "Once the plane is in the air, you can ...... your seat belts if you wish.",
    answers: [
    { answer: "undress", value: 0, indexCAM: 0 },
    { answer: "unfasten", value: 1, indexCAM: 1 },
    { answer: "unlock", value: 0, indexCAM: 2 },
    { answer: "untie", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "I left my last job because I had no ...... to travel.",
    answers: [
    { answer: "place", value: 0, indexCAM: 0 },
    { answer: "position", value: 0, indexCAM: 1 },
    { answer: "opportunity", value: 1, indexCAM: 2 },
    { answer: "possibility", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "It wasn't a bad crash and ...... damage was done to my car.",
    answers: [
    { answer: "little", value: 1, indexCAM: 0 },
    { answer: "small", value: 0, indexCAM: 1 },
    { answer: "light", value: 0, indexCAM: 2 },
    { answer: "mere", value: 0, indexCAM: 3 },
    ],
    },
    //debilidades a partir de aqui
    {
    question: "I'd rather you ...... to her why we can't go.",
    answers: [
    { answer: "would explain", value: 0, indexCAM: 0 },
    { answer: "explained", value: 1, indexCAM: 1 },
    { answer: "to explain", value: 0, indexCAM: 2 },
    { answer: "will explain", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "Before making a decision, the leader considered all ...... of the argument.",
    answers: [
    { answer: "sides", value: 1, indexCAM: 0 },
    { answer: "features", value: 0, indexCAM: 1 },
    { answer: "perspectives", value: 0, indexCAM: 2 },
    { answer: "shades", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "This new printer is recommended as being ...... reliable.",
    answers: [
    { answer: "greatly", value: 0, indexCAM: 0 },
    { answer: "highly", value: 1, indexCAM: 1 },
    { answer: "strongly", value: 0, indexCAM: 2 },
    { answer: "readily", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "When I realised I had dropped my gloves, I decided to ...... my steps.",
    answers: [
    { answer: "retrace", value: 1, indexCAM: 0 },
    { answer: "regress", value: 0, indexCAM: 1 },
    { answer: "resume", value: 0, indexCAM: 2 },
    { answer: "return", value: 0, indexCAM: 3 },
    ],
    },
    {
    question: "Anne's house is somewhere in the ...... of the railway station.",
    answers: [
    { answer: "region", value: 0, indexCAM: 0 },
    { answer: "quarter", value: 0, indexCAM: 1 },
    { answer: "vicinity", value: 1, indexCAM: 2 },
    { answer: "district", value: 0, indexCAM: 3 },
    ],
    }
    
    // ... más preguntas*/
    ];



    export default dataCAM;