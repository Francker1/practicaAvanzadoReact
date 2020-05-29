import React from "react";

import T from "prop-types";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import AdsList from "../AdsList";


function AdFavCard({
    _id,
    photo,
    name,
    price,
    description,
    type,
    tags,
    createdAt,
    updatedAt,
}) {
    return (
        <>
            <Card
                onClick={() => {
                    this.navigateToDetail(_id);
                }}
            >
                <Card.Img className="img-card" variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text as={"div"}>
                        <dl>
                            <dt>Precio: {price} €</dt>

                            <dt>Desc:</dt>
                            <dd>{description}</dd>

                            <dt>Tipo:</dt>
                            <dd>{type}</dd>

                            <dt>Tags:</dt>
                            {tags && tags.map(tag => <dd key={tag}>{tag}</dd>)}

                            <dt>created:</dt>
                            <dd>created: {createdAt}</dd>
                        </dl>
                    </Card.Text>
                    <Card.Footer>
                        <small className="text-muted">
                            Última actualización: {updatedAt}
                        </small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    );
}

AdFavCard.propTypes = {
    _id: T.string.isRequired,
    photo: T.string,
    name: T.string.isRequired,
    price: T.number.isRequired,
    description: T.string.isRequired,
    type: T.string.isRequired,
    tags: T.array,
    createdAt: T.string.isRequired,
    updatedAt: T.string.isRequired,
};


export default function Favorites({ items }) {
    return (
        <Container>
            <Row>
                <Col>
                    <Link className="link" to="/ads">
                        <Button variant="outline-secondary">Volver A Anuncios</Button>
                    </Link>{' '}
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3>Mis Anuncios Favoritos</h3>
                    <AdsList
                        items={items}
                        renderItem={ad => (
                            <AdFavCard {...ad} />
                        )}
                    />
                </Col>
            </Row>
        </Container>
    );
}

Favorites.propTypes = {
    ads: T.arrayOf(T.shape({ _id: T.string.isRequired })),
};