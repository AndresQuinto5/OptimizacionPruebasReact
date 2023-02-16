import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { NavLinks } from "./navLinks";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../index.js"
import { MobileNavLinks } from "./MobileNavLinks"


const NavBarContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 75px;
    box-shadow: 0 1px 3px rgba(15, 15, 0, 0.13);
    display: flex;
    background-color: #ddd;
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
    return <NavBarContainer>

        <MiddleSection>
            {!isMobile2 && <NavLinks />}
        </MiddleSection>
        <RightSection>
            {isMobile2 && <MobileNavLinks/>}
        </RightSection>
    </NavBarContainer>
}