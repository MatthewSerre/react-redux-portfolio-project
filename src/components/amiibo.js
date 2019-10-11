import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Amiibo extends React.Component {


    render() {

        const amiibo = this.props.amiibo
        return (
                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src={amiibo.image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{this.props.amiibo.character}</h3>
                        <p>{this.props.amiibo.amiiboSeries}</p>
                        <p>Fuck!</p>
                    </Carousel.Caption>
                </Carousel.Item>
        )
    }
}

export default Amiibo