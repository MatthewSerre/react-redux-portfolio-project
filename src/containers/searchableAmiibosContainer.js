import React from 'react';
import 'isomorphic-fetch';
import AmiibosList from '../components/amiibosList'

const URL = 'https://www.amiiboapi.com/api/amiibo/?character=';

class SearchableAmiibosContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          searchTerm: ""
        };
      }

    handleCharacterSelect = event => {
        this.filter(event.target.value)
    }

    filter(characterName) {
        fetch(URL + characterName)
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                items: result.amiibo
            });
            }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <select onChange={this.handleCharacterSelect}>
                        <option value="select">Select</option>
                        <option value="mario">Mario</option>
                        <option value="Peach">Peach</option>
                    </select>
                </div>
                <AmiibosList amiibos={this.state.items} />
            </div>
            );
        }   
}

export default SearchableAmiibosContainer