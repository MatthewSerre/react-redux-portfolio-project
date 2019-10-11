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

    handleQuery = event => {
        console.log(event.target.value)
        this.search(event.target.value)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.search(this.state.searchTerm)
    }

    search(searchTerm) {
        fetch(URL + searchTerm)
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
                    {/* <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                            <input id="search" name="search" type="text" onChange={this.handleQuery} value={this.state.searchTerm} />
                            </label>
                        </div>
                        <div>
                            <button type="submit">Search</button>
                        </div>
                    </form> */}
                    <select onChange={this.handleQuery}>
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