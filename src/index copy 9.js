import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ChildComponent from './ChildComponent'

class App extends React.Component{
  constructor(props){
    super(props);
    debugger
    this.state = {
      name: 'appState'
    }
  }
  render (){
    debugger
    return (
      <div className="appClassName">
        <p>props:{this.props.name}</p>
        <p>state:{this.state.name}</p>

        <ChildComponent />
      </div>
    )
  }
}

ReactDOM.render(<App name="appProps" />, document.getElementById('root'))
