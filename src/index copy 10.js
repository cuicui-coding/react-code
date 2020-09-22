import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import ChildComponent from './ChildComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
    debugger
    this.state = {
      data: [{key:'one', name: 'one'}, {key:'two', name:'two'},{key:'one', name: 'one1'}]
    }
  }

  handleClick = () => {
    // debugger
    // this.setState({ data: ['new', 'one', 'two'] })
    // this.setState({ data: ['new', 'one', 'two', Math.random()] })
    // debugger

    this.setState({data:[{key:'one', name: 'one'},{key:'three', name:'three'}, {key:'one', name:'two1'}]})
  }

  render() {
    debugger
    return (
      <div name="appContainer">
        <ul name="ul">
          {this.state.data.map(({key, name}, index) => {
            return <li key={key} name={name}>{name} <input /></li>
          })}
        </ul>
        {/* {this.state.data.length<4 && <p name="p">{this.state.data.join('-')}</p>} */}
        <button onClick={this.handleClick} name="button">
          加1
        </button>
        {/* <ChildComponent /> */}
      </div>
    )
  }
}

debugger
ReactDOM.render(<App name="appComponent" />, document.getElementById('root'))
