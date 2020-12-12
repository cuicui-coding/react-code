import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  handleClick= ()=>{
    debugger
    this.setState({count: this.state.count ++})
    debugger
    this.setState({count: this.state.count ++})
    debugger
  }
  componentDidMount() {
    debugger
    this.setState({count: this.state.count ++})
    debugger
    this.setState({count: this.state.count ++})
    debugger
  }
  render() { 
    return (<div>
      <p>count: {this.state.count}</p>
      <button onClick={this.handleClick}>加1</button>
    </div> );
  }
}

debugger
ReactDOM.render(<App name="appComponent" />, document.getElementById('root'))
