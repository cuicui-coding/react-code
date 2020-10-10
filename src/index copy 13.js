import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Parent extends React.Component {
  state = {
    num: 1,
  }

  updateNum1() {
    const newNum = this.state.num + 1

    debugger

    this.setState({ num: newNum })
    debugger
    this.setState({ num: newNum + 1 }, () => {
      //这里打印的是最新的state值
      console.log(this.state.num)
    })
    debugger
  }

  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClickCapture={this.updateNum1.bind(this)}>加1</button>
      </div>
    )
  }
}
debugger
ReactDOM.render(<Parent name="appComponent" />, document.getElementById('root'))
