import React, { Component } from 'react'
import Sub from './Sub'
export default class SetState extends Component {
  state={ count : 0}
  handleClick =()=>{
    debugger
    this.setState({count: this.state.count +1})
    debugger
    this.setState({count: this.state.count +1})
    debugger
    this.setState({count: this.state.count +1})

  }
  componentDidMount(){
    let count = 1;
    debugger;
    this.setState({
        count: count+1
    })
    debugger;
    console.log(this.state.count, 'componentDidMount')
    Promise.resolve().then(()=>{
      console.log(this.state.count, 'promise then')
      debugger
      
        this.setState({
            count: this.state.count+1
        })
        debugger;
        this.setState({
            count: this.state.count+1
        })
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>加1</button>
        <Sub></Sub>
      </div>
    )
  }
}
