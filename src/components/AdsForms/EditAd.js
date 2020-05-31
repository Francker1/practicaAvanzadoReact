import React, { useState, useEffect } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import { TagsList } from "../../services/constants/ads-data";
import { useParams } from "react-router-dom";
import { FormButton } from "../_common/buttons/btn";

import { getAdByID, updateAdvert } from "../../services/KeepAds_API";
import BackButton from "../_common/buttons/ButtonBack";

function EditAdForm() {
  const [ad, setAd] = useState([]);
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const fetchData = async () => {
    const res = await getAdByID(id);
    setAd(res.data.result);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAd({ ...ad, [name]: value });
  };

  const data = {
    name: ad.name,
    price: parseInt(ad.price),
    description: ad.description,
    tags: ad.tags,
    type: ad.type,
    photo: ad.photo,
  };

  const updateAd = async () => {
    await updateAdvert(id, data)
      .then(() => setMessage("El anuncio ha sido actualizado!"))
      .catch((err) => {
        //ui errors
        alert(
          `no se ha guardado tu cambio, lo sentimos. Inténtalo más tarde. ${err}`,
        );
      });
  };

  return (
    <Container>
      <Row>
        <BackButton>Volver</BackButton>
      </Row>
      <Row className="mt-5 mb-3">
        <Col className="col-12">
          <h3>Editar Anuncio </h3>
          <h6>ID: {ad._id}</h6>
        </Col>
      </Row>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Título anuncio</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={ad.name}
              placeholder="¿Qué vas a vender o comprar?"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>URL imagen</Form.Label>
            <Form.Control
              name="photo"
              type="text"
              value={ad.photo}
              placeholder="Url de la imagen"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Descripción anuncio</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              maxLength="240"
              name="description"
              value={ad.description}
              placeholder="Descríbelo un poco"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Etiquetas</Form.Label>
            <Form.Control
              name="tags"
              as="select"
              multiple
              onChange={handleInputChange}
            >
              <TagsList />
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              name="price"
              type="number"
              min="0"
              value={ad.price}
              placeholder="¿Por cuánto lo vendes o lo compras?"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              as="select"
              value={ad.type}
              name="type"
              onChange={handleInputChange}
            >
              <option value="sell" id="sell">
                Venta
              </option>
              <option value="buy" id="buy">
                Compra
              </option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <FormButton type="submit" onClick={updateAd}>
          Actualizar
        </FormButton>

        <p>{message}</p>
      </Form>
    </Container>
  );
}

export default EditAdForm;
