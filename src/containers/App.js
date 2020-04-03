import React from 'react';
import { connect } from 'react-redux';
import {CardList, Scroller, SearchBox} from '../components';
import '../css/main.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => ( {searchField: state.searchField} );

const mapDispatch = dispatch => ( { onSearchChange: event => dispatch(setSearchField(event.target.value)) } );


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
      };
    }
    
  
    componentDidMount() {
      fetch(process.env.REACT_APP_JSON_PLACEHOLDER_URL)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { searchField, onSearchChange} = this.props;  
      const filteredRobots = this.state.items.filter( robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
      })
      const { error, isLoaded } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="container-fluid">
            <header className="header"><h1>ROBOLIST</h1></header>
            <SearchBox searchChange={onSearchChange} />
            <Scroller > 
                <CardList robots={ filteredRobots } />
            </Scroller>
            <hr />
            <footer className="footer">Costin Catescu © 2020</footer>
        </div>
        );
      }
    }
}

  export default connect(mapStateToProps, mapDispatch)(App);
