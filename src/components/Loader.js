import React from 'react';
import { Spinner } from "react-bootstrap";

function Loader(props) {

    let isShowing = props.show ? '' : 'hidden'

  return (
    <div className={isShowing}>
        <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default Loader;
