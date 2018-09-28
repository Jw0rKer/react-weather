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
    this.state = {
      cities: null
    };
    this.search.bind(this);
  }

  search(keyword) {
    if (keyword != null) {
      fetch('http://localhost/weather.php?command=search&keyword=' + keyword)
        .then(response => response.json())
        .then(json => {
          this.setState(json);
        })
        .catch(e => console.error(e));
    } else {
      this.setState({cities: initData});
    }
  }

  componentDidMount() {
    this.search(this.props.match.params.keyword);
  }

  componentWillReceiveProps(nextPorps) {
    this.search(nextPorps.match.params.keyword);
  }


  render() {
    return (
      <div>
        <Search/>
        {(this.state.cities != null) ? (
            this.state.cities.map((city, i) => {
              return <City woeid={city.woeid}/>
            })) :
          <span>No Result found</span>
        }
      </div>
    );
  }
}

export default Home;
