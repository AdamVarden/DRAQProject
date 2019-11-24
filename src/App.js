import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Add from './Components/add';
import View from './Components/view';
import Home from './Components/home';
import Update from './Components/update';
import AddUser from './Components/user/adduser';
import LogIn from './Components/user/login';

class App extends React.Component {
  
  render() {
    
    return (
      <BrowserRouter>

        <div className="App">
          <Nav variant="tabs" className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/">Log Out</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/view">Employees</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/add">Add Employee</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/user/adduser">Add User</Nav.Link>
            </Nav.Item>
          </Nav>

          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/view" component={View} />
            <Route path="/add" component={Add} />
            <Route path="/user/adduser" component={AddUser} />            
            <Route path = "/update/:id" component={Update}/>            
          </Switch>

        </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
