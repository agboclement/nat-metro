import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,
      Button,  Row, Col,  CustomInput, Label, Form, Input, FormGroup  } from 'reactstrap';
import classnames from 'classnames';
import Group from '../assets/img/Group.svg';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      render() {
        return (
          <div className="container">
          
          <div className=" row row-lg-12 row-sm-12 row-xs-12 row-md-12">
          <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6 static-signup">
             <img className="Group" src={Group} alt="signup-pic" />


          </div>
          <div className="col-lg-6 col-sm-6 col-xs-6 col-md-6 moving-signup">
            <Nav>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                Sign Up
                </NavLink>
              </NavItem>
              <p className="between">or</p>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
              Sign In
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="9">
                  <Form>
                  <FormGroup>
                     <Label className="fullname-label" >FULLNAME</Label>
                     <br/>
                    <Input  className= "fullname" type="email" name="name"  placeholder="Enter your fullname" />
                    <br/>
                  </FormGroup>
                  <FormGroup>
                     <Label className="email-label" >EMAIL</Label>
                    <Input  className= "email" type="email" name="email"  placeholder="Your e-mail goes here" />
                  </FormGroup>
                  <FormGroup>
                     <Label className="password-label" >PASSWORD</Label>
                     <br/>
                    <Input  className= "password" type="Password" name="password"  placeholder="Create your password" />
                  </FormGroup>
                     
     
                      <CustomInput className="agreement" type="checkbox" id="exampleCustomCheckbox" label="I agree to terms and conditions" />
                     <Button className="signup-button" color="primary">Sign up</Button>
                     <p className="option">OR</p>
                     <p className="switch">Already have an account? <a href="/">Sign in</a> </p>
                  </Form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="9">
                  <Form>
            
                  <FormGroup>
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
                  <Button className="signin-button" color="primary">Sign up</Button>
                  <p className="option-signup">OR</p>
                     <p className="switch-signup">Don't have an account? <a href="/">Sign up</a> </p>
                     
                   </Form>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            </div>
            </div>
          </div>
        );
      }
    }
export default SignIn;
