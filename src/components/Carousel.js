import React from 'react';
import './styles.css'

import {
    UncontrolledCarousel
} from 'reactstrap';




const items = [
    {
        src: 'img/1.jpg',
        header:'Crea tu evento fácil y rápido',
    },


    {
        src: 'img/2.jpg',
        header:'Disfruta sin preocupaciones tu fiesta',
    },

    {
        src: 'img/3.jpeg',
        header:'Organizamos tu evento por tí',
    }
];
const Example = () => 

< UncontrolledCarousel items = {
    items
}
/>;

export default Example;