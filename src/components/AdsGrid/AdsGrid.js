import React from "react";
import T from "prop-types";
import { Link } from "react-router-dom";

import Username from "../_username";
import { Container, Card } from "react-bootstrap";

import ButtonFavs from "../_common/buttons/ButtonAdFavs";
import AdsList from "../AdsList";

function AdCard({
    _id,
    photo,
    name,
    price,
    description,
    type,
    tags,
    createdAt,
    updatedAt,
    onAddToFavsClick,
}) {
    return (
        <>
        <Link to={`/detail/${_id}`}>
            <Card>
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
            </Link>
            <ButtonFavs
                action={onAddToFavsClick} 
            />{' '}
        </>
    );
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
};

export default function AdsGrid({ ads, addToFavs }) {
    return (
        <Container>
            <Username/>
            <AdsList
                items={ads}
                renderItem={ad => (
                    <AdCard
                        {...ad}
                        onAddToFavsClick={() => addToFavs(ad._id)}
                    />
                )}
            />
        </Container>
    );
}

AdsGrid.propTypes = {
    ads: T.arrayOf(T.shape({ _id: T.string.isRequired })),
    addToFavs: T.func.isRequired,
};
