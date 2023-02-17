import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../contexts/store';
import {  setComplete, setBanderaTEMP, setBanderaTIE, resetStates} from '../../contexts/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { sendEmail } from '../..//contexts/SendEmail';
import styled from 'styled-components';


const EmailIconWrapper = styled.div`
    display: inline-block;
    cursor: pointer;
    color: #003660;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #f16a24;
    }

    &.sent {
        color: #f16a24;
    }
`;
const RotatingIcon = styled(FontAwesomeIcon)`
    animation: spin 1s ease-in-out;
    transform-origin: center;
    animation-iteration-count: 1;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
const SentText = styled.div`
    margin-top: 8px;
`;

export function EmailIcon() {
    const [sent, setSent] = useState(false);
    const dispatch = useDispatch();

    function handleClick() {
    // Enviar el email aquí utilizando la función sendEmail() de tu contexto
    // O utilizando alguna librería para enviar correos electrónicos
    setSent(true);
    setTimeout(() => {
        setSent(false);
        sendEmail();
        dispatch(resetStates());
        alert('Sus resultados han sido enviados con éxito!');
    }, 2000);
}

    

    return (
        <EmailIconWrapper onClick={handleClick} className={sent ? 'sent' : ''}>
            {sent ? <RotatingIcon icon={faPaperPlane} size="2x" /> : <FontAwesomeIcon icon={faPaperPlane} size="2x" />}
            {sent && <SentText>¡Email enviado!</SentText>}
        </EmailIconWrapper>
    );
}

