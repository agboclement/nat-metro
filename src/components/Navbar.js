import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Jumbotron, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input } from 'reactstrap';
import metron from '../assets/img/metron.svg';
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
              <Button size="sm" className="nav-btn">Sign Up</Button>
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
                        1 Adult
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Children</DropdownItem>
                        
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
            </div>
            <div className="row">
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2"></Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="From" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2"></Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="To" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2"></Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Date of journey" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        </div>
        </Jumbotron>
        </div>
      </div>
    );
  }
}