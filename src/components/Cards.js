import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import { wrap } from 'module';

const Example = (props) => {
  return (      

      <div className="cards3">
      <div className="how"><h3>¿Cómo funcionamos?</h3></div>
      <CardGroup>
          <div className="cardindividual1">
      <Card>
        <CardImg />
        <img className="img1" src="img/4.jpg"/> 
        <CardBody>
          <CardTitle className="titulo">¡Registrate!</CardTitle>
          <CardText className="titulo2">Únete a nosotros y obtendrás los beneficios de la party.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg/>
        <img className="img1" src="img/5.jpg"/> 
        <CardBody>
          <CardTitle className="titulo">Crea tu evento</CardTitle>
          <CardText className="titulo2">Ya registrado podrás crear tus propios eventos</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg/>
        <img className="img1" src="img/6.jpg"/> 
        <CardBody>
          <CardTitle className="titulo">Disfruta de 2meet</CardTitle>
          <CardText className="titulo2">Jamás tendrás que preocuparte por que llevar a tus eventos </CardText>
        </CardBody>
      </Card>
        </div>
    </CardGroup>
      </div>
  );
};

export default Example;