import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
  onChange = (event) =>{
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.items.filter((item) => {
      if(item.id !== id) return item;
    });
  }

  render() {
    return (
      <div>    
        <form className="App" onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button>Submit</button>
        </form>
        <List items={this.state.items} remove={this.handleRemove.bind(this)}/>
      
      </div>
    );
  }
}

export default App;
