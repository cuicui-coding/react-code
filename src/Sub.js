import React from 'react';
class Sub extends React.PureComponent{
  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps')
    return null;
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return false;
  }
  render(){
    console.log('sub render')
    return <div>sub</div>
  }
}

export default Sub
