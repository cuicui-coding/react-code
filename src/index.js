// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './Click'

// ReactDOM.render(<App name="appComponent" />, document.getElementById('root'))

// 实际上是Object.is()的polyfill
function is(x, y) {
  // SameValue algorithm
  debugger
  if (x === y) {
   // 处理为+0 != -0的情况
    return x !== 0 || 1 / x === 1 / y;
  } else {
  // 处理 NaN === NaN的情况
    return x !== x && y !== y;
  }
};

console.log(is(null, null))