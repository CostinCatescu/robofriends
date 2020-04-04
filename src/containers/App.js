import React from 'react';
import { connect } from 'react-redux';
import {CardList, SearchBox} from '../components';
import '../css/main.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state =>  { 
  return { 
    searchField: state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
};

const mapDispatch = dispatch =>  { 
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)) ,
    onRequestRobots: () => dispatch(requestRobots())
  } 
};


class App extends React.Component {
  
    componentDidMount() {
      this.props.onRequestRobots();
    }
  
    render() {
      const { searchField, onSearchChange, robots, error, isPending} = this.props;  
      const filteredRobots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
      })
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (isPending) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="container-fluid">
            <header className="header"><h1>ROBOLIST</h1></header>
            <SearchBox searchChange={onSearchChange} />
                <CardList robots={ filteredRobots } />
            <hr />
            <footer className="footer">Costin Catescu © 2020</footer>
        </div>
        );
      }
    }
}

  export default connect(mapStateToProps, mapDispatch)(App);
