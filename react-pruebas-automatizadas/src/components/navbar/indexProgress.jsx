import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { Logo } from "../logo";
import { ProLinks } from "./progressLinks";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../index.js"
import { MobileNavLinks } from "./MobileNavLinks"
import { EmailIcon } from './SendEmailBtn' 

const ProgressBarContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 75px;
    box-shadow: 0 1px 3px rgba(15, 15, 0, 0.13);
    display: flex;
    background-color: #f5f5f5;
    align-items: center;
    padding: 0 1.5em;

    @media (max-width: 767px) {
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
    }
`;

const LeftSection = styled.div`
    display: flex;

    @media (max-width: 767px) {
        width: 100%;
        justify-content: flex-start;
        margin-bottom: 1em;
    }
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 1em;
        flex-wrap: wrap;
    }
`;

const RightSection = styled.div`
    display: flex;

    @media (max-width: 767px) {
        width: 100%;
        justify-content: center;
    }
`;

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.5em;

    @media (max-width: 767px) {
        margin-right: 0;
    }
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    color: #555;
    text-decoration: none;
    margin-right: 1.5em;
    font-size: 1.1em;

    @media (max-width: 767px) {
        margin-right: 1em;
        font-size: 0.9em;
    }
`;

const Icon = styled.i`
    margin-right: 0.5em;
    color: ${props => props.done ? "#7ac142" : "#ccc"};
`;

export function ProgressBar(props) {
    const isMobile2 = useMediaQuery({maxWidth: DeviceSize.mobile });
    const banderaTIE = useSelector((state) => state.banderaTIE);
    const banderaTEMP = useSelector((state) => state.banderaTEMP);
    const banderaGRIT = useSelector((state) => state.banderaGRIT);
    const banderaCAM = useSelector((state) => state.banderaCAM);

    if ( banderaTEMP === false && banderaTIE === false && banderaGRIT === false && banderaCAM === false) {
        return 
    } else if ( banderaTEMP === true && banderaTIE === true && banderaGRIT === true && banderaCAM === true) {
        return (
        <ProgressBarContainer>
    
            <MiddleSection>
                <ProLinks />
            </MiddleSection>
    
            <RightSection>
                <EmailIcon /> 
            </RightSection>
    
        </ProgressBarContainer>
        )
    } else {
        return (
        <ProgressBarContainer>
    
            <MiddleSection>
                <ProLinks />    
            </MiddleSection>
            
        </ProgressBarContainer>
        )
    }
}