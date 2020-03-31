import React from 'react';
import {CardList, Scroller, SearchBox} from '../components';
import '../css/main.css';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        query : ''
      };
    }

    onSearchChange = (event) => {
        this.setState({
            query: event.target.value
        })
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
        
      const filteredRobots = this.state.items.filter( robot => {
        return robot.name.toLowerCase().includes(this.state.query.toLowerCase())
      })
      const { error, isLoaded } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (<div class="wrapper-container">
                    <header className="header"><h1>ROBOLIST</h1></header>
                    <SearchBox searchChange={this.onSearchChange} />
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

  export default App;
