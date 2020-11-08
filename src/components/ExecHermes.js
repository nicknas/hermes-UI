import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import fetchExecuteHermes from "../services/execHermes";
import { useState } from "react";
import Message from "./Message";

function ExecHermes(props) {
  const [validated, setValidated] = useState(false);
  const [ticketType, setTicketType] = useState("");
  const [jiraTicket, setJiraTicket] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageShow, setMessageShow] = useState(false);

  const handleSubmit = (ev) => {
    console.log("handling submit");
    ev.preventDefault();
    const form = ev.currentTarget;
    if (form.checkValidity()) {
      console.log("Its valid");
      setValidated(true);
      doFetch();
    }
  };

  const fadeOutMessage = () => {
    setTimeout(() => {
      setMessageShow(false);
    }, 5000);
  };

  const doFetch = () => {
    let body = {};
    body[ticketType] = jiraTicket;
    console.log(body);
    fetchExecuteHermes(JSON.stringify(body))
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
      else {
        throw new Error('Hermes Launch error');
      }
    })
    .then((hermesResult) => {
        setMessage("Hermes has been launched succesfully, check the report in the jira ticket");
        setMessageType("success");
        setMessageShow(true);
        fadeOutMessage();
    })
    .catch((error) => {
        setMessage("Hermes cannot be launched, try again later");
        setMessageType("danger");
        setMessageShow(true);
        fadeOutMessage();
    });
    
  };

  return (
    <div>
      {<Message variant={messageType} message={message} show={messageShow} />}
      <Card>
        <Card.Header>Execute Hermes</Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="ofsGeneratorForm">
              <div className="mb-3">
                <Form.Label>Select type of ticket</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(ev) => setTicketType(ev.target.value)}
                  custom
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="jira_execution_ticket">Test Execution</option>
                  <option value="jira_plan_ticket">Test Plan</option>
                </Form.Control>
              </div>
              <div className="mb-3">
                <Form.Control
                  type="text"
                  onChange={(ev) => setJiraTicket(ev.target.value)}
                  custom
                  required
                  placeholder="Jira ticket"
                  defaultValue=""/>
              </div>
            </Form.Group>
            <Button variant="dark" type="submit">
              Execute Hermes
            </Button>
          </Form>
          <br />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExecHermes;
