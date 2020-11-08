import React from "react";
import { Alert } from "react-bootstrap";

function Message(props) {
  return (
    <Alert variant={props.variant} className={props.show ? "" : "hidden"}>
      {props.message}
    </Alert>
  );
}

export default Message;
