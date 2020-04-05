import React from 'react';
import { connect } from 'react-redux';
import {CardList, SearchBox} from '../components';
import '../css/main.css';
import { setSearchField, requestApiData } from '../actions';
import Particles from 'react-particles-js';
const particlesOptions = {
  particles: {
      number: {
        value: 120,
        density: {
          enable: true, 
          value_area:800 
        }
      }
  }
};

const mapStateToProps = state =>  { 
  return { 
    searchField: state.searchRobots.searchField,
    data : state.requestApiData.data,
    isPending: state.requestApiData.isPending,
    error: state.requestApiData.error
  }
};

const mapDispatch = dispatch =>  { 
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)) ,
    onRequestRobots: url => dispatch(requestApiData(url))
  } 
};

class App extends React.Component {
  
    componentDidMount() {
      this.props.onRequestRobots(process.env.REACT_APP_JSON_PLACEHOLDER_URL);
    }
  
    render() {
      const { searchField, onSearchChange, data, error, isPending} = this.props;  
      const filteredRobots = data.filter( robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
      })
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (isPending) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="container-fluid">
            <Particles className="particles" params={particlesOptions} />
            <header className="header"><h1>ROBOLIST</h1></header>
            <SearchBox searchChange={onSearchChange} />
                <CardList robots={ filteredRobots } />
            <hr />
            <footer className="footer">
              <a href={`https://www.linkedin.com/in/${ process.env.REACT_APP_LINKEDIN_USERNAME }`}>
                <span className="icon  icon-linkedin">
                  <svg width="20px" viewBox="0 50 512 512" >
                    <path fill="#828282" d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
                    C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
                    M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
                    c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
                    s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
                  </svg>
                </span>
              </a>
              <p>Costin Catescu © 2020</p>
            </footer>
          </div>
        );
      }
    }
}

export default connect(mapStateToProps, mapDispatch)(App);
