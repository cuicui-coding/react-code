import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, Switch } from 'react-router';
import {
 HashRouter,
 Route,
 Link,
//  Switch
} from 'react-router-dom';
const ThemeContext = React.createContext('light');
 
class App extends Component {
 render() {
  return (
   <ThemeContext.Provider >
    <h1>App</h1>
    <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About</Link></li>
     <li><Link to="/inbox">Inbox</Link></li>
    </ul>
    {this.props.children}
 
   </ThemeContext.Provider>
  );
 }
}
 
const About = () => (
 <div>
  <h3>About...</h3>
 </div>
)
 

class Home extends React.Component{
  static contextType = ThemeContext;
  render(){
    return (
      <div>
       <h3>Home...</h3>
       <h3>{this.context}</h3>
      </div>
     )
  }
}
 
const Message = ({ match }) => (
 <div>
  <h3>new messages....</h3>
  <h3>{match.params.id}</h3>
 </div>
)
 
const Inbox = ({ match }) => (
 <div>
  <h2>Inbox...</h2>
  <Route path={`${match.url}/messages/:id`} component={Message}/> 
  <h2>Inbox...</h2>
 </div>
) 
const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'inbox', component: Inbox },
  ]
}

ReactDOM.render(
 (<HashRouter>
  <App>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/inbox" component={Inbox} />
  </App>
 </HashRouter>),
 document.getElementById('root')
);