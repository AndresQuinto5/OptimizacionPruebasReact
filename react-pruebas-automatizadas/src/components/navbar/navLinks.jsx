import React from "react";
import styled from "styled-components";
import home from "../pruebas/home";
import StartingPage from "../pruebas/StartingPage";


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

    &:hover {
        border-top: 2px solid #f16a24;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;

`;

export function NavLinks(props) {
    return (
        <NavLinksContainer>
            <LinkWrapper>
                <LinkItem>
                    <Link href="/">Home</Link>
                </LinkItem>
                <LinkItem>
                    <Link href="/StartingPage">About</Link>
                </LinkItem>
                <LinkItem>
                    <Link href="/contact">Contact</Link>
                </LinkItem>
            </LinkWrapper>
        </NavLinksContainer>
    );
}