import React from "react";
//import T from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../forms/Filters";
import AdsGrid from "../AdsGrid";

function ButtonCreateAd() {
    return (
        <Row>
            <Col>
                <Link className="create-link" to="/crear">
                    Crear anuncio
                </Link>
            </Col>
        </Row>
    );
}

export default function AdsBoard() {
    return (
        <Container>
            <Filter />
            <ButtonCreateAd />
            <AdsGrid />
        </Container>
    );
}
