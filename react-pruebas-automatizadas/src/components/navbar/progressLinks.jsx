import React from "react";
import styled from "styled-components";
import home from "../pruebas/home";
import StartingPage from "../pruebas/StartingPage";
import { Route } from  "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../index.js"
import pngegg_empty from "../../assets/pngegg_empty.png";
import pngegg from "../../assets/pngegg.png";

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinkWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
    display: flex;
    height: 100%;
    padding: 0 1em; 
    color: #222;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;

    @media screen and (max-width: ${DeviceSize.mobile}px) {
        font-size: 12px;
        padding: 0 0.5em;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const Icon = styled.img`
    @media screen and (max-width: ${DeviceSize.mobile}px) {
        width: 16px;
        height: 16px;
    }
`;

export function ProLinks(props) {
    const banderaTIE = useSelector((state) => state.banderaTIE);
    const banderaTEMP = useSelector((state) => state.banderaTEMP);
    const banderaCAM = useSelector((state) => state.banderaCAM);
    const banderaGRIT = useSelector((state) => state.banderaGRIT);

    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile });

    const imageSrc1 = banderaTEMP ? pngegg : pngegg_empty;
    const imageSrc2 = banderaTIE ? pngegg : pngegg_empty;
    const imageSrc3 = banderaCAM ? pngegg : pngegg_empty;
    const imageSrc4 = banderaGRIT ? pngegg : pngegg_empty;

    return (
        <NavLinksContainer>
            <LinkWrapper>
                <LinkItem>
                    TIE
                </LinkItem>
                <LinkItem>
                    <Icon src={imageSrc2} alt="TIE" />
                </LinkItem>
                <LinkItem>
                    Temperamento
                </LinkItem>
                <LinkItem>
                    <Icon src={imageSrc1} alt="Temperamento" />
                </LinkItem>
                <LinkItem>
                <LinkItem>
                    GRIT
                </LinkItem>
                <LinkItem>
                    <Icon src={imageSrc4} alt="GRIT" />
                </LinkItem>
                    English test
                </LinkItem>
                <LinkItem>
                    <Icon src={imageSrc3} alt="English test" />
                </LinkItem>
            </LinkWrapper>
        </NavLinksContainer>
    );
}