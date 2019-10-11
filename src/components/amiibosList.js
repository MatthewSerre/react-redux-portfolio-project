import React from 'react';

class AmiibosList extends React.Component {


    render() {
        const amiibos = this.props.amiibos
        return (
            <div>
                <ul>
              {amiibos.map(item => (
                <li>
                  {item.character} - {item.gameSeries} - {item.amiiboSeries} - <img src={item.image} alt={item.character} />
                </li>
              ))}
            </ul>
            </div>
        )
    }
}

export default AmiibosList