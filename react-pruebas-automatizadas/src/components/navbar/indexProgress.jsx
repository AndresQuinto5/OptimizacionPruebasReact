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
`;

const LeftSection = styled.div`
    display: flex;

`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
    align-items: center;
`;


const RightSection = styled.div`
    display: flex;
`;

export function ProgressBar(props) {
    const isMobile2 = useMediaQuery({maxWidth: DeviceSize.mobile });
    const banderaTIE = useSelector((state) => state.banderaTIE);
    const banderaTEMP = useSelector((state) => state.banderaTEMP);
    const banderaGRIT = useSelector((state) => state.banderaGRIT);

    if ( banderaTEMP === false && banderaTIE === false && banderaGRIT === false) {
        return 
    } else if ( banderaTEMP === true && banderaTIE === true && banderaGRIT === true) {
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