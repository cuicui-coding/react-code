import React, {useState, useEffect, useLayoutEffect,useRef} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function ChildComponent(props){
 console.log(props, 'props');

 debugger
 const domRef = useRef()

//  debugger
//  const [count, setCount] = useState(0)

//  debugger
//  const [theme, setTheme] = useState('light')


//  debugger
//  useLayoutEffect(()=>{
//   debugger
//   console.log(theme, 'useLayoutEffect theme')
//   return () => {
//     debugger
//   };
//  },[theme])
//  debugger
//  useEffect(() => {
//    debugger
//    console.log(theme, 'useEffect theme')
//    return () => {
//      debugger
//    };
//  }, [theme])

//  const handleClick=()=>{
//    debugger
//   setCount(count+1)
//   debugger
//   setCount(count+1)
//   debugger

//  }
//  const handleTheme = ()=>{
//    const newTheme = theme === 'light' ? 'dark': 'light'
//    setTheme(newTheme)
//  }

 return <div className="app">
   <p ref={domRef}>count:{'count'}</p>
   {/* <button onClick={handleClick}>count加1</button>
   <p>theme:{theme}</p>
   <button onClick={handleTheme}>换theme</button> */}
 </div>
}

export default ChildComponent
