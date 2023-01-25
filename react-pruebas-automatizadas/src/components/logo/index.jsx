import React from "react";
import styled from "styled-components";
import ImprogressLogoImg from "../../assets/Logo_Improgress_PNG.png";

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 120px;
    height: 58px;
    
    img {
        width: 100%;
        height: 100%;
    }
    
`;
/*
const LogoText = styled.div`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    color: #000;
    font-weight: 500;
`;
*/
export function Logo(props) {
    return <LogoWrapper>
        <LogoImg><img src={ImprogressLogoImg} alt="improgress"/></LogoImg>
    </LogoWrapper>
}