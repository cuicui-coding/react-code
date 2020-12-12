import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component {
  constructor(){
    super();
    this.state = {
      val: 0,
      sum: 0,
    }
  }
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate:',this.state.val)
  //   return true;
  // }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate:',this.state.val);
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate:',this.state.val);
  // }
  componentDidMount() {
    console.log('---componentDidMount start---')
    this.setState({val: this.state.val + 1});
      console.log('state 1:',this.state.val);    // 第 1 次 log
      
      this.setState({val: this.state.val + 1});
      console.log('state 2:',this.state.val);    // 第 2 次 log
      
      // setTimeout(()=>{
        // this.state.val= this.state.val+100;
      // })

      setTimeout(() => {
        console.log('---setTimeout start---')
        this.setState({val: this.state.val + 1});
        console.log('setTimeout 1:',this.state.val);  // 第 3 次 log

        this.setState({val: this.state.val + 1});
        console.log('setTimeout 1:',this.state.val);  // 第 4 次 log

        console.log('---setTimeout end---')
      }, 1000);

    //   this.setState(prevState => {
    //     console.log('prevState 1:',prevState.val)
    //     return {val: prevState.val + 1};
    //   });
    //   this.setState(prevState => {
    //     console.log('prevState 2:',prevState.val)
    //     return {val: prevState.val + 1};
    // });
    // console.log('---componentDidMount end---')

  }
  render() {
    console.log('render:', this.state.val)
    return <div>Hello {this.state.val}</div>;
  }
}


ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
);
