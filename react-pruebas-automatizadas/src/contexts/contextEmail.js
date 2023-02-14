import React, { createContext, useState } from 'react';

export const Context = createContext({});

export const MyProvider = (props) => {
    const [arrayTIE, setArrayTIE] = useState({});
    const [arrayTemp, setArrayTemp] = useState({});

    const mergeArrays = () => {
        console.log(arrayTIE);
        console.log(arrayTemp);
        const templateFinal = { ...arrayTIE, ...arrayTemp };
        return templateFinal;
    };

    return (
        <Context.Provider
        value={{
            arrayTIE,
            setArrayTIE,
            arrayTemp,
            setArrayTemp,
            mergeArrays,
        }}
        >
        {props.children}
        </Context.Provider>
    );
    };
