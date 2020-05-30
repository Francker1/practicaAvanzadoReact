import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ButtonBack({ children }) {
  let history = useHistory()
  return (
    <Button variant="info" onClick={() => history.goBack()}>
      {children}
    </Button>
  )
}