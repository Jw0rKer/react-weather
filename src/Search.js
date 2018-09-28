import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import './Search.css'


class Search extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    if (this.refs._input.value !== '')
      this.props.history.push(`/search/${this.refs._input.value}`);
    else
      this.props.history.push(`/`);
  }

  render(){
    return (
      <div className="search">
        <input ref="_input" type="text"/>
        <button onClick={this.search}>Search!</button>
      </div>
    );
  }
}

export default withRouter(Search) ;
