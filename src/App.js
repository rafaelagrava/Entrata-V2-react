import React , {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from  "./components/Drawer";
//import TransactionTab from "./Pages/TransactionTab";
//import CustomerTab from "./Pages/CustomerTab";
import Login from "./Pages/Login"

export default class App extends Component{

constructor(){
    super();

    this.state = {
        loggedInStatus : "Not Logged In",
        user: {}
    }
}

render(){
    return (
        <div className = "app">
            <Router>
             <Switch>
                 <Route 
                 exact 
                 path = {"/"}
                 render = {props => (
                     <Login {...props} loggedInStatus ={this.state.loggedInStatus} />
                 )}
                 />
                <Route 
                 exact 
                 path = {"/dashboard"}
                 render = {props => (
                     <Drawer {...props} loggedInStatus ={this.state.loggedInStatus} />
                 )}
                 />
                 <Route 
                 exact 
                 path = {"/transaction"}
                 render = {props => (
                     <Drawer {...props} loggedInStatus ={this.state.loggedInStatus} />
                 )}
                 />
                 <Route 
                 exact 
                 path = {"/customer"}
                 render = {props => (
                     <Drawer {...props} loggedInStatus ={this.state.loggedInStatus} />
                 )}
                 />
             </Switch>
            </Router>

        </div>
    )
}
}



// function App(){
//  return(
// //   <Router>
// //  <Drawer/>
// //   </Router>
//       <Router>
//         <div className="container">
//           <Switch>
//             <Route path="/Login" type="guest">
//               <Login />
//             </Route>
//             <Route path="/" type="private">
//               <Drawer />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//  );
// }
// export default App;
