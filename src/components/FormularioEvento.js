import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div className="formulario1">
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Nombre del Evento</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Ubicación</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Descripción del Evento</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
          </FormGroup>
        
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Fecha del Evento</Label>
          <Col sm={10}>
          <input type="date" name="bday" sm={2}/>
          </Col>
        </FormGroup>


        
          <FormGroup>
        <div className="descripciones">
        <h3 className="llevar">¿Qué voy a llevar?</h3>
          <Label className="stuff" for="exampleText" sm={1}>Vasos </Label>
          <input className="stuff" type="number" name="quantity" min="1" max="5"/>

          <Label className="stuff" for="exampleText" sm={1}>Platos</Label>
          <input className="stuff" type="number" name="quantity" min="1" max="5"/>

          <Label className="stuff" for="exampleText" sm={1}>Carne</Label>
          <input className="stuff" type="number" name="quantity" min="1" max="5"/>

          <Label className="stuff" for="exampleText" sm={1}>Botana</Label>
          <input className="stuff" type="number" name="quantity" min="1" max="5"/>

          <Label className="stuff" for="exampleText" sm={1}>Refrescos</Label>
          <input className="stuff" type="number" name="quantity" min="1" max="5"/>

          <Label className="stuff" for="exampleText" sm={1}>Cervezas</Label>
          <input className="stuff" type="number" name="quantity" min="1" max="5"/>

          <Label className="stuff" for="exampleText" sm={1}>Bebidas</Label>
          <input className="stuff" type="number" name="quantity" min="1" max="5"/>

          <Label className="stuff" for="exampleText" sm={1}>Hielos</Label>
          <input className="stuff" type="number" name="quantity" min="1" max="5"/>
        

           
          </div>

          
       
    
    


        </FormGroup>
        <FormGroup check row>
        <div className="botoncito">
          <Col sm={{ size: 10, offset: 2 }}>
            <Button href="/perfil">Hecho</Button>
          </Col>
            </div>
        </FormGroup>
      </Form>
      </div>
    );
  }
}