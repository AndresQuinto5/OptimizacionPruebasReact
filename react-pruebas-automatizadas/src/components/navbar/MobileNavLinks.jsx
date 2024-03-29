import React from "react";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
    height: 100%;
    width 100%;
    display: flex;
    align-items: center;
`;

const LinkWrapper = styled.ul`
    margin: 0;
    padding: 0.5em;
    display: flex;
    height: 100%;
    list-style: none;
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 65px;
    left: 0;
`;

const LinkItem = styled.li`
    display: flex;
    width: 100%;
    padding: 0 1em; 
    color: #222;
    font-weight: 500;
    font-size: 17px;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out;
    margin-bottom: 0.5em;


`;

const Link2 = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;

`;

const Marginer = styled.div`
    height: 7em;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

export function MobileNavLinks(props) {
    const [isOpen, setIsOpen] = React.useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            {isOpen && ( 
            <LinkWrapper>
                <LinkItem>
                    <StyledLink  onClick={closeMenu} to="/">Home</StyledLink >
                </LinkItem>
                <LinkItem>
                    <StyledLink  onClick={closeMenu} to="/TIE">TIE</StyledLink >
                </LinkItem>
                <LinkItem>
                    <StyledLink  onClick={closeMenu} to="/Temperamento">Test de Temperamento</StyledLink >
                </LinkItem>
                <LinkItem>
                    <StyledLink  onClick={closeMenu} to="/GRIT">GRIT test</StyledLink >
                </LinkItem>
                <LinkItem>
                    <StyledLink  onClick={closeMenu} to="/CAM">English test</StyledLink >
                    </LinkItem>
                <Marginer/>

            </LinkWrapper>
    )}
        </NavLinksContainer>
    );
}