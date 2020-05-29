import React from "react";

import { Link } from "react-router-dom";

import FavoriteIcon from '@material-ui/icons/Favorite';
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: palevioletred;
    font-size: 1.25em;
    margin: 0.5em;

    :hover {
        text-decoration: none;
        color: #ffead0;
    }
`;


export default function NavbarMenu({totalFavAds}){

    return (
        <Navbar className="menu" collapseOnSelect expand="lg">
            <StyledLink to="/">KeepAds</StyledLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <StyledLink to="/login">Login</StyledLink>
                    <StyledLink to="/registro">Registro</StyledLink>
                    <StyledLink to="/ads">Anuncios</StyledLink>
                    <StyledLink to="/favs">
                        <FavoriteIcon />{`(${totalFavAds})`}
                    </StyledLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}