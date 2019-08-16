import React from 'react';
import { Button, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const Example = (props) => {
  return (
 
    <div className="perfilito">
        <div className="perfilito2">
            <h2>Perfil</h2>
        </div>
        <div className="perfilito3">
        <h2>Eventos</h2>
        <Button href="/FormularioEvento">Crea tu Evento</Button>
        
    </div>
   
    </div>
  );
}

export default Example;