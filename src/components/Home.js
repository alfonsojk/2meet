import React, { Component } from 'react'
import Carousel from './Carousel';
import Cards from './Cards';
export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-4">
        <Carousel />
        </div>

        <div className="cards2">
        <Cards />
        </div>
            </React.Fragment>
        )
    }
}

export default Home
