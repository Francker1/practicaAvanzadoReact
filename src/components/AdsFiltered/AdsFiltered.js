import React, { useState, useEffect } from "react";

import { getFilteredAds } from "../../services/KeepAds_API";

import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../../services/constants/config-data";

function AdsFiltered() {
  const [ads, setAds] = useState([]);

  const params = new URLSearchParams(window.location.search);

  const adName = params.get("name") ? `name=${params.get("name")}` : "";
  const adVenta = params.get("venta") ? `venta=${params.get("venta")}` : "";
  const adTag = params.get("tag") ? `tag=${params.get("tag")}` : "";
  const adPrice =
    params.get("pricemin") || params.get("pricemax")
      ? `price=${params.get("pricemin")}-${params.get("pricemax")}`
      : "";

  const url = `${API_URL}/anuncios?${adName}&${adVenta}&${adTag}&${adPrice}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await getFilteredAds(url);
      setAds(res.data.results);
    };

    fetchData(url);
  });

  return (
    <Container>
      <Row>
        <Col>
          <Link className="link" to="/ads">
            <Button variant="outline-secondary">Volver A Anuncios</Button>
          </Link>{" "}
        </Col>
      </Row>

      <Row>
        {ads.map((ad) => (
          <Col className="col-12 col-sm-6 col-lg-4 mb-4">
            <Link to={`/detail/${ad._id}`}>
              <Card>
                <Card.Img className="img-card" variant="top" src={ad.photo} />
                <Card.Body>
                  <Card.Title>{ad.name}</Card.Title>
                  <Card.Text as={"div"}>
                    <dl>
                      <dt>Precio: {ad.price} €</dt>

                      <dt>Desc:</dt>
                      <dd>{ad.description}</dd>

                      <dt>Tipo:</dt>
                      <dd>{ad.type}</dd>

                      <dt>Tags:</dt>
                      {ad.tags &&
                        ad.tags.map((tag) => <dd key={tag}>{tag}</dd>)}

                      <dt>created:</dt>
                      <dd>created: {ad.createdAt}</dd>
                    </dl>
                  </Card.Text>
                  <Card.Footer>
                    <small className="text-muted">
                      Última actualización: {ad.updatedAt}
                    </small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AdsFiltered;
