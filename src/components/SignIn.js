import React from 'react';
import { FormGroup,Label, Form, Input, CustomInput, Button } from 'reactstrap';
import '../App.css';

import Group from '../assets/img/Group.svg';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }
      render() {
    return (
      <div>
        <div className="container">
          
          <div className=" row row-lg-12 row-sm-12 row-xs-12 row-md-12">
          <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6 static-signin">
             <img className="Group" src={Group} alt="signup-pic" />


          </div>
          <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6 moving-signin">
          <Form>
            
            <FormGroup>
           <p className="header-signin">Sign In</p>
               <Label className="signin-email-label" >EMAIL</Label>
              <Input  className= "signin-email" type="email" name="email"  placeholder="Enter your e-mail" />
            </FormGroup>
            <FormGroup>
               <Label className="signin-password-label" >PASSWORD</Label>
               <br/>
              <Input  className= "signin-password" type="Password" name="password"  placeholder="****************" />
            </FormGroup>
            <CustomInput className="signin-agreement" type="checkbox" id="exampleCustomCheckbox2" label="Remember password" />
               <a className="forgot" href="/">Forgot password</a>
            <Button className="signin-button" color="primary">Sign In</Button>
               <p className="option-signin">OR</p>
               <p className="switch-signin">Don't have an account? <a href="/">Sign up</a> </p>
               
             </Form> 
          </div>
      </div>
      </div>
      </div>
    );
  }
};
  
  
export default SignIn;