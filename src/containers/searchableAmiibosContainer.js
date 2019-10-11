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
        this.setState({
            searchTerm: event.target.value
        })
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
    
    //   componentDidMount() {
    //     fetch(URL)
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: result.amiibo
    //           });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }

    
      render() {

        return (
            <div>
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
                </div>
                <AmiibosList amiibos={this.state.items} />
            </div>
          );
        }
      
}

export default SearchableAmiibosContainer