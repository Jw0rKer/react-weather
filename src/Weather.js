import React, {Component} from 'react';
import './Weather.css'
import './App.css'

class Weather extends Component {
  render() {
    return (
        <div className="card">
          <h1 className="App-title">{this.props.title}</h1>
          <div>
            <span className="current">{Math.round(this.props.current)}</span> <i>°c</i>
          </div>
          <div className='inline'>
            <span className={`state-icon-sml state-${this.props.abbr}`}></span>
            <span>{this.props.state}</span>
          </div>
          <div>min: {Math.round(this.props.min)}°c</div>
          <div> max: {Math.round(this.props.max)}°c</div>
        </div>
      );
  }
}

export default Weather;
