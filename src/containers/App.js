import React, { Component } from 'react';

import './App.css'

import CardList from '../conponents/CardList';
import SearchBox from '../conponents/SearchBox';
import Scroll from '../conponents/Scroll';
import ErrorBoundry from '../conponents/ErrorBoundry'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if(!response.ok){
        throw Error(response.status);
      }
      return response.json();
    })
    .then(users => {
      this.setState({ robots: users });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <div className="tc">
      <h1 className="f1">Robo Filter</h1>
      <h2 className="loading-text f2 f-sega">Loading</h2>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">Robo Filter</h1>
        <SearchBox searchChange={ this.onSearchChange }/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={ filteredRobots } />
          </ErrorBoundry>
        </Scroll>
        <span className="scroll-label f-sega">
          scroll down
        </span>
      </div>
    )
  }
}

export default App;

