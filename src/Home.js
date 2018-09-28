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
    this.state =null;
    this.search.bind(this);
  }

  search(keyword){
    if (keyword != null) {
      fetch('http://localhost/weather.php?command=search&keyword=' + keyword)
        .then(response => response.json())
        .then( json =>{
          console.log({cities:json})
          this.setState(null);
          this.setState({cities:json});
        })
        .catch(e => console.error(e));
    }else{
      this.setState({cities:initData});
    }
  }

  componentDidMount(){
    alert('componentDidMount')
    this.search(this.props.match.params.keyword);
  }

  componentWillReceiveProps(nextPorps){
    alert('componentWillReceiveProps')
    this.search(nextPorps.match.params.keyword);
  }


  render() {
    return (
      <div>
        <Search/>
        {(this.state != null) ? (
          this.state.cities.map((city, i) =>
            <City woeid={city.woeid}/>
          )) :
          <span>No Result found</span>
        }
      </div>
    );
  }
}

export default Home;
