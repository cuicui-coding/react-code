import React, { Component, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Context = React.createContext();

class Parent extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log('Parent render');
    return <Child />;
  }
}

class Child extends React.Component {
  render() {
    console.log('Child render');
    return (
      <Context.Consumer>
        {({ index, changeIndex }) => {
          console.log('Child Consumer render');
          return <button onClick={changeIndex}>{index} +</button>
        }}
      </Context.Consumer>
    );
  }
}

class Ancestor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
    this.changeIndex = this.changeIndex.bind(this);
  }
  changeIndex() {
    this.setState(preState => {
      return {
        index: preState.index + 1
      };
    });
  }
  render() {
    console.log('Ancestor render');
    return (
      <Context.Provider
        value={{
          index: this.state.index,
          changeIndex: this.changeIndex
        }}
      >
        <Parent />
      </Context.Provider>
    );
  }
}

// mount 结果
// Ancestor render
// Parent render
// Child render
// Child Consumer render
// update 结果
// Ancestor render
// Child Consumer render



ReactDOM.render(
  <Ancestor name="appComponent" id="appComponent" />,
  document.getElementById('root')
)
