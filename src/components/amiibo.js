import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Amiibo extends React.Component {


    render() {
        return (
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={this.props.image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{this.props.character}</h3>
                        <p>{this.props.amiiboSeries}</p>
                    </Carousel.Caption>
                </Carousel.Item>
        )
    }
}

export default Amiibo