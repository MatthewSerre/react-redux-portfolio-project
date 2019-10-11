import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class AmiibosList extends React.Component {


    render() {
        const amiibos = this.props.amiibos.map(amiibo =>
            <Carousel.Item key={amiibo.tail}>
                <img
                className="img-fluid"
                src={amiibo.image}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{amiibo.character}</h3>
                    <p>{amiibo.amiiboSeries}</p>
                </Carousel.Caption>
                <p>{amiibo.amiiboSeries}</p>
            </Carousel.Item>
        )
        return (
            <Carousel interval={null}>
                {amiibos}
            </Carousel>
        )
    }
}

export default AmiibosList