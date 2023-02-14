import React, { createContext, useState } from 'react';

const MyContext = createContext({});

const MyProvider = ({ children }) => {
    const [templateFinal, setTemplateFinal] = useState({});

    return (
        <MyContext.Provider value={{ templateFinal, setTemplateFinal }}>
        {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };
