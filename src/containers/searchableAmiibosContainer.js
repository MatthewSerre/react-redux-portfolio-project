import React from 'react';
import AmiibosList from '../components/amiibosList'
import 'isomorphic-fetch';

const URL = 'https://www.amiiboapi.com/api/amiibo/?character';

class SearchableAmiibosContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            amiibos: [],
            searchTerm: ""
        }
    }

    handleQuery = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL + this.state.searchTerm)
        .then(response => response.json())
        .then(res => this.setState( {amiibos: res.results}));
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                        <input id="search" name="search" type="text" onChange={this.handleQuery} value={this.state.searchTerm} />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </form>
                <div>
                    <AmiibosList amiibos={this.state.amiibos} />
                </div>
            </div>
        )
    }

}

export default SearchableAmiibosContainer