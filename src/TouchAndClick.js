import React,{Component} from 'react';
export default class NextPage extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      order:[]
    };
  }

  add() {
    this.setState({
      count: this.state.count + 1
    });
  }
  componentDidMount(){
    document.addEventListener('touchstart',(e)=>{
      e.preventDefault();
      this.setState((preState)=>({
        order: preState.order.concat('touchstart(捕获)')
      }))
    },true)
    document.addEventListener('touchstart',()=>{
      this.setState((preState)=>({
        order: preState.order.concat('touchstart(冒泡)')
      }))
    }, false)

    document.addEventListener('touchend',(e)=>{
      this.setState((preState)=>({
        order: preState.order.concat('touchend(捕获)')
      }))
      // 最开始注释两者
      e.stopPropagation();
      // e.preventDefault();
    },true)
    document.body.addEventListener('touchend',(e)=>{
      this.setState((preState)=>({
        order: preState.order.concat('touchend(body捕获)')
      }))
    },true)
    
    document.body.addEventListener('touchend',(e)=>{
      this.setState((preState)=>({
        order: preState.order.concat('touchend(body冒泡)')
      }))
    },false)
    document.body.addEventListener('touchend',(e)=>{
      this.setState((preState)=>({
        order: preState.order.concat('touchend(body1冒泡)')
      }))
    },false)
    document.addEventListener('touchend',(e)=>{
      this.setState((preState)=>({
        order: preState.order.concat('touchend1(捕获)')
      }))
    },true)
    document.addEventListener('touchend',(e)=>{
      this.setState((preState)=>({
        order: preState.order.concat('touchend2(捕获)')
      }))
    },true)
    document.addEventListener('touchend',(e)=>{

      this.setState((preState)=>({
        order: preState.order.concat('touchend(冒泡)')
      }))
    },false)
    document.addEventListener('touchend',(e)=>{

      this.setState((preState)=>({
        order: preState.order.concat('touchend(冒泡1)')
      }))
    },false)
   
    document.addEventListener('click',(e)=>{
      this.setState((preState)=>({
        order: preState.order.concat('click(捕获)')
      }))
    },true)
    document.addEventListener('click',()=>{
      this.setState((preState)=>({
        order: preState.order.concat('click(冒泡)')
      }))
    },false)
    
  }

  render() {
    return (
      <div>
        <div>{this.state.order.join('->')}</div>
        <div onClick={()=>this.add()}>点击+1</div>
        <div >当前count {this.state.count}</div>
      </div>
    );
  }
}