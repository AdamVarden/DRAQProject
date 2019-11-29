import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Add from './Components/add';
import View from './Components/view';
import Home from './Components/home';
import Update from './Components/update';
import AddUser from './Components/user/adduser';
import LogIn from './Components/user/login';
import FindUserData from './Components/user/findUserData';
import ChangeUserDetails from './Components/user/changeUserDetails';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>

        <div className="App">
          <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>

              <NavDropdown title="Employees Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="/add">Add Employee</NavDropdown.Item>
                <NavDropdown.Item href="/view">Employees</NavDropdown.Item>
                
              </NavDropdown>

              <NavDropdown title="User Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="/user/adduser">Add User</NavDropdown.Item>
                <NavDropdown.Item href="/user/findUserData">Update User</NavDropdown.Item>
                
              </NavDropdown>   

              <Nav.Item>
                <Nav.Link href="/">Log Out</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/view" component={View} />
            <Route path="/home" component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/user/adduser" component={AddUser} />
            <Route path="/update/:id" component={Update} />
            <Route path="/user/findUserData" component={FindUserData} />
            <Route path="/user/changeUserDetails/:user" component={ChangeUserDetails} />

          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}
export default App;
