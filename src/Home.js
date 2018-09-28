import React, {Component} from 'react';
import './App.css';
import City from './City';
import Search from './Search';

const initData = [
  {
    name: 'Istanbul',
    woeid: 2344116
  },
  {
    name: 'Berlin',
    woeid: 638242
  }
  ,
  {
    name: 'London',
    woeid: 44418
  }
  ,
  {
    name: 'Helsinki',
    woeid: 565346
  }
  ,
  {
    name: 'Dublin',
    woeid: 560743
  }
  ,
  {
    name: 'Vancouver',
    woeid: 9807
  }
]


class Home extends Component {

  constructor(props) {
    super(props);
    this.state ={cities:initData};
  }



  render() {
    return (
      <div>
        <Search/>
        {(this.state != null) ? (this.state.cities.map((city, i) =>
            <City woeid={city.woeid}/>
          )) :
          <span>No Result found</span>
        }
      </div>
    );
  }
}

export default Home;
