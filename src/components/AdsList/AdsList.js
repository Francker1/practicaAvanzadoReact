import React from "react";
import T from "prop-types";
import { Row, Col } from "react-bootstrap";

export default function AdsList({ items, renderItem }) {
  return (
    <Row>
      {items.map((item) => (
        <Col key={item._id} className="col-12 col-sm-6 col-lg-4 mb-4">
          {renderItem(item)}
        </Col>
      ))}
    </Row>
  );
}

AdsList.propTypes = {
  className: T.string,
  items: T.arrayOf(T.shape({ _id: T.string.isRequired })).isRequired,
  renderItem: T.func.isRequired,
};
