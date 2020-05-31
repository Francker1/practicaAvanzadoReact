import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//import T from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../AdsForms/Filters";
import AdsGrid from "../AdsGrid";

import { fetchAds } from "../../store/actions";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  return (
    <Container>
      <Filter />
      <ButtonCreateAd />
      <AdsGrid />
    </Container>
  );
}
