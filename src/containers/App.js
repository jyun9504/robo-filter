import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css'

import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry'

import { setSearchField, requestRobots } from '../redux/actions/actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <div className="tc">
        <h1 className="f1">Robo Filter</h1>
        <h2 className="loading-text f2 f-sega">Loading</h2>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1" >Robo Filter</h1>
        <SearchBox searchChange={ onSearchChange }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

