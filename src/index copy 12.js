import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  const [state, setstate] = useState(0)

  const handleClick = () => {
    debugger;
    setstate(state + 1)
    debugger
    setstate(state + 1)
    debugger;
  }
  const handleClickParent = ()=>{
    debugger
    console.log('handleClickParent')
  }
  debugger;
  return (
    <div onClick={handleClickParent}>
      <p name={state+ 'ppp'}>{state}</p>
      <button name="button123" onClick={handleClick}>加1</button>
    </div>
  )
}

debugger
ReactDOM.render(<App name="appComponent" />, document.getElementById('root'))
