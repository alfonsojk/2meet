import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div className="fondo">
      <Form className="login">
        <div>
            <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="examplePassword"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={{ size: 10, offset: 5 }}>
              <div>

              <Button href='./perfil'>Submit</Button>

              </div>
          </Col>
        </FormGroup>
        </div>
      </Form>
        </div>
        
    );
  }
}