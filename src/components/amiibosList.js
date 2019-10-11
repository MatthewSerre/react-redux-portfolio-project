import React from 'react';
import Amiibo from './amiibo'
import Carousel from 'react-bootstrap/Carousel'

class AmiibosList extends React.Component {


    render() {
        const amiibos = this.props.amiibos.map(amiibo =>

            <Carousel.Item>
            <img
            className="img-fluid"
            src={amiibo.image}
            alt="First slide"
            height="50%"
            />
            <Carousel.Caption>
                <h3>{amiibo.character}</h3>
                <p>{amiibo.amiiboSeries}</p>
            </Carousel.Caption>
        </Carousel.Item>
        )
        return (
            // <div>
            // <div>
            //     <ul>
            //   {amiibos.map(item => (
            //     <li key={item.tail}>
            //       {item.character} - {item.gameSeries} - {item.amiiboSeries} - <img src={item.image} alt={item.character} />
            //     </li>
            //   ))}
            // </ul>
            // </div>
            <Carousel interval={null}>
                {amiibos}
            </Carousel>
            // </div>
        )
    }
}

export default AmiibosList