import React,{Component} from 'react';
export default class NextPage extends Component {
  handleFatherClick=(e)=>{
    debugger
    console.log('father click');
}

handleChildClick=(e)=>{
  debugger
    console.log('child click');
}

render(){
    return <div className="box">
                <div className="father" onClick={this.handleFatherClick}> father
                    <div className="child" onClick={this.handleChildClick}>child </div>
                </div>
           </div>
}
}