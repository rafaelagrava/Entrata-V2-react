import React, {Component} from 'react';
import SignIn from '../authentication/Sign_in'

export default class Login extends Component{
  constructor(props){
  super(props);

  this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data){
    this.props.history.push("/dashboard");
    }
    render(){
      return(
        <div>
          
          <SignIn handleSuccessfulAuth={this.handleSuccessfulAuth}/>
        </div>
      )
    }
}