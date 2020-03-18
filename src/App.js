import React, { Component } from 'react';
import './App.css';
import List from './List';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []  
    };
    this.deleteFn=this.deleteFn.bind(this);
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [this.state.items, this.state.term]
    });
  }
  deleteFn(index){
    
    console.log('Triggered',index);
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} eventTriggerer={this.deleteFn} />
        </div>
    );
  }
}