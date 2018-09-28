import React, {Component} from 'react';
import Weather from './Weather';
import './App.css';
import {Link} from 'react-router-dom'

class City extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('http://localhost/weather.php?command=location&woeid=' + this.props.woeid)
      .then(response => response.json())
      .then( json=> this.setState(json))
      .catch(e =>console.error(e));
  }

  render() {
    return (
      (this.state.woeid != null) ? (
        <Link to={`/weather/${this.state.woeid}`}>
          <Weather min={this.state.consolidated_weather[0].min_temp} max={this.state.consolidated_weather[0].max_temp} current={this.state.consolidated_weather[0].the_temp} title={this.state.title} abbr={this.state.consolidated_weather[0].weather_state_abbr} state={this.state.consolidated_weather[0].weather_state_name}/>
        </Link>
      ) : (
        <div className="card">
          <div className="App-title">Loading</div>
        </div>
      )
    );
  }
}

export default City;
