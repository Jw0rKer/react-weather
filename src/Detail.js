import React, {Component} from 'react';
import './App.css';
import Weather from './Weather';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('http://localhost/weather.php?command=location&woeid=' + this.props.match.params.woeid)
      .then(response => response.json())
      .then(json=>this.setState(json))
      .catch(e => console.error(e));
  }

  getWeekDay(increment=0){
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[(new Date().getDay()+increment)%7];
  }


  render() {
    return (
      <div>
        {
          (this.state.consolidated_weather != null) ?
            this.state.consolidated_weather.map((day, i) =>
              <Weather min={day.min_temp} max={day.max_temp} current={day.the_temp} title={this.getWeekDay(i)} abbr={day.weather_state_abbr} state={day.weather_state_name}/>
            )
            :<span>Loading</span>
        }
      </div>
    );
  }
}

export default Detail;
