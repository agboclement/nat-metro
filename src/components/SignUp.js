import React from 'react';
import { Button,  CustomInput, Label, Form, Input, FormGroup  } from 'reactstrap';

import Group from '../assets/img/Group.svg';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }
      render() {
        return (
          <div className="container">
          
          <div className=" row row-lg-12 row-sm-12 row-xs-12 row-md-12">
          <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6 static-signup">
             <img className="Group" src={Group} alt="signup-pic" />


          </div>
          <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6 moving-signup">
           
                  <Form>
            
                  <FormGroup>
                  <p className="header-signup">Sign Up</p>
                     <Label className="signup-fullname-label" >FULL NAME</Label>
                    <Input  className= "signup-fullname" type="email" name="email"  placeholder="Enter your fullname" />
                  </FormGroup>
                  <FormGroup>
                     <Label className="signup-email-label" >EMAIL</Label>
                     <br/>
                    <Input  className= "signup-email" type="email" name="email"  placeholder="your email goes here" />
                  </FormGroup>
                  <FormGroup>
                     <Label className="signup-password-label" >PASSWORD</Label>
                     <br/>
                    <Input  className= "signup-password" type="password" name="password"  placeholder="Create your password" />
                  </FormGroup>
                  <CustomInput className="signup-agreement" type="checkbox" id="exampleCustomCheckbox2" label="I agree to the terms and conditions" />
                   
                  <Button className="signup-button" color="primary">Sign up</Button>
                     <p className="option-signup">OR</p>
                     <p className="switch-signup">Already have an account? <a href="/">Sign in</a> </p>
                     
                   </Form>
               
            </div>
            </div>
          </div>
        );
      }
    }
export default SignUp;