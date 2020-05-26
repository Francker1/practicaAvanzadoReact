import React from 'react';
import T from 'prop-types';
//import classNames from 'classnames';
import { Col, Card } from "react-bootstrap";

function AdCard({ _id, photo, name, price, description, type, tags, createdAt, updatedAt}){

    return (
        <Col key={_id} className="col-12 col-sm-6 col-lg-4 mb-4" >
            <Card onClick={() => {this.navigateToDetail(_id)}}>
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
                            { tags && tags.map(tag => (
                                <dd key={tag}>
                                    {tag}
                                </dd>
                            ))
                            }

                            <dt>created:</dt>
                            <dd>created: {createdAt}</dd>
                        </dl>
                    </Card.Text>
                    <Card.Footer>
                        <small className="text-muted">Última actualización: {updatedAt}</small>
                    </Card.Footer>
                </Card.Body>
                
            </Card>

            <button className="btn-edit" onClick={() => { this.navigateToEdit(_id, name, description, price, type, photo, tags)}}>Editar Anuncio</button>
        </Col>
    )
}

AdCard.propTypes = {
    _id: T.string.isRequired,
    photo: T.string,
    name: T.string.isRequired,
    price: T.number.isRequired,
    description: T.string.isRequired,
    type: T.string.isRequired,
    tags: T.array,
    createdAt: T.string.isRequired,
    updatedAt: T.string.isRequired,
}

export default AdCard;