import React from "react";
import styled from "styled-components";
import home from "../pruebas/home";
import StartingPage from "../pruebas/StartingPage";
import { Route } from  "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

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
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;

`;

export function ProLinks(props) {
    const banderaTIE = useSelector((state) => state.banderaTIE);
    const banderaTEMP = useSelector((state) => state.banderaTEMP);
    const banderaCAM = useSelector((state) => state.banderaCAM);
    const banderaGRIT = useSelector((state) => state.banderaGRIT);

    const imageSrc1 = banderaTEMP ? pngegg : pngegg_empty;
    const imageSrc2 = banderaTIE ? pngegg : pngegg_empty;
    const imageSrc3 = banderaCAM ? pngegg : pngegg_empty;
    const imageSrc4 = banderaGRIT ? pngegg : pngegg_empty;

    return (
        <NavLinksContainer>
            <LinkWrapper>

                <LinkItem>
                    Test de Temperamento
                </LinkItem>
                <LinkItem>
                <img src={imageSrc1}/>
                </LinkItem>

                <LinkItem>
                    TIE
                </LinkItem>
                <LinkItem>
                <img src={imageSrc2}/>
                </LinkItem>
                <LinkItem>
                    English test
                </LinkItem>
                <LinkItem>
                <img src={imageSrc3}/>
                </LinkItem>

                <LinkItem>
                    GRIT
                </LinkItem>
                <LinkItem>
                <img src={imageSrc4}/>
                </LinkItem>

            </LinkWrapper>
        </NavLinksContainer>
    );
}