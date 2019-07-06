import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Jumbotron, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input } from 'reactstrap';
import metron from '../assets/img/metron.svg';
import Decrebtn from '../assets/img/Decrebtn.svg';
import Increbtn from '../assets/img/Increbtn.svg';
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
         <div className="row-lg-12 row-sm-12 row-xs-12 row-md-12"> 
          <Jumbotron className="row-lg-12 row-sm-12 row-xs-12 row-md-12 hero">
        <Navbar color="transparent" light expand="md" className="navbar-body">
          <NavbarBrand href="/" className="row-lg-12 row-sm-12 row-xs-12 row-md-12">
          <img src= {metron} className="logo" alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navbar-right" navbar>
              <NavItem>
                <NavLink href="/components/" className="nav-list" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className="nav-list">Print ticket</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="nav-list">Create account</NavLink>
              </NavItem>
              <Button size="sm" className="nav-btn">Sign In</Button>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="row-lg-12 row-sm-12 row-xs-12 row-md-12">
            <div className="hero-title">
                <h1 className="hero-heading">Online Train ticket booking made easy!</h1>
                <p className="hero-paragraph">Find cheap train tickets and pay securedly.</p>
            </div>
        </div>
        <div className="choose-trip">
            <div className="row">
                <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 dropdowns">
                    <UncontrolledDropdown>
                        <DropdownToggle caret  className="dropdown-btn select-box">
                            One-way
                        </DropdownToggle>
                        <DropdownMenu className='select-box'>
                            <DropdownItem>Return</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
                <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 dropdown">
                    <UncontrolledDropdown>
                    <DropdownToggle caret  className="dropdown-btn">
                        1 Passenger
                    </DropdownToggle>
                    <div className="dropdown-box">
                        <DropdownMenu className="dropdown-container">
                            <div className="row-12 dropdown-block">
                                <div className="col-6">
                                  <h4 className="dropdown-head">Adult(18+)</h4>
                                </div>
                                <div className="col-6 dropdown-btn-container">
                                    <div className="dropdown-btn-block">
                                        
                                     <button className="decre-btn"><img className="decre-img" src= {Decrebtn} /></button>
                                    
                                     <span className="count-num">1</span>   
                                            
                                     <button className="decre-btn"><img className="incre-img" src= {Increbtn} /></button>
                                        
                                    </div>
                                </div>
                            </div>
                                <hr></hr>
                            <div className="row-12 dropdown-block">
                                <div className="col-6">
                                  <h4 className="dropdown-head">Children(0-17)</h4>
                                </div>
                                <div className="col-6 dropdown-btn-container">
                                    <div className="dropdown-btn-block">
                                        
                                     <button className="decre-btn"><img className="decre-img" src= {Decrebtn} /></button>
                                    
                                     <span className="count-num">1</span>   
                                            
                                     <button className="decre-btn"><img className="incre-img" src= {Increbtn} /></button>
                                        
                                    </div>
                                </div>
                                    
                            </div>
                            
                        </DropdownMenu>
                    </div>
                    </UncontrolledDropdown>
                </div>
            </div>
            <div className="row">
                <Form inline className="form-inline">
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 form-group">
                        <Label for="exampleEmail" className="mr-sm-5"></Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="From" className="form-input" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 form-group">
                        <Label for="examplePassword" className="mr-sm-4"></Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="To" className="form-input" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 form-group">
                        <Label for="examplePassword" className="mr-sm-4"></Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Date of journey" className="form-input" />
                    </FormGroup>
                    <Button className="form-btn">Search</Button>
                </Form>
            </div>
        </div>
        </Jumbotron>
        </div>
      </div>
    );
  }
}