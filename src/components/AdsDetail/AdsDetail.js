import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

import { getAdByID } from "../../services/KeepAds_API";
import BackButton from "./../_common/buttons/ButtonBack";

import "./AdsDetail.css";

function AdDetail() {
  const [ad, setAd] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAdByID(id);
      setAd(res.data.result);
    };

    fetchData(id);
  });

  return (
    <Container>
      <BackButton>Volver</BackButton>
      <Row className="my-5">
        <Col>
          <h3>{ad.name}</h3>
          <h6>ID: {ad._id}</h6>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-6">
          <Image src={ad.photo} fluid />
        </Col>
        <Col className="col-12 col-md-6 ad__info">
          <p>
            <span>Precio:</span> {ad.price}
          </p>
          <p>
            <span>Descripción:</span> {ad.description}
          </p>
          <p>
            <span>Tipo:</span> {ad.type}
          </p>
          <p>
            <span>Fecha creación:</span> {ad.createdAt}
          </p>
          <p>
            <span className="font-weight-bold">Última actualización:</span>{" "}
            {ad.updatedAt}
          </p>

          <div className="mt-5">
            {ad.tags &&
              ad.tags.map((tag) => (
                <Link to={`/filter?tag=${tag}`}>
                  <span class="ad__tag" key={tag}>
                    {tag}
                  </span>
                </Link>
              ))}
          </div>
        </Col>
      </Row>

      <Button variant="outline-info">
        <Link to={`/editar/${ad._id}`}>Editar Anuncio</Link>
      </Button>
    </Container>
  );
}

export default AdDetail;
