import React from 'react';
import '../App.css';
import Axios from 'axios';
import Employees from './employees';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, FormGroup, Label, Input, } from 'reactstrap';
class View extends React.Component {
  state = {
    employees: []
  };


  handleEntailmentRequest(e) {
    e.preventDefault();

    window.location.reload(false);
  }

  componentDidMount() {
    Axios.get('http://localhost:4000/api/employees')
      .then(response => {
        this.setState({ employees: response.data.employees });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (

      <div className="App">
        <h3 >Table of All Employees</h3>
        <div>
          <Button type="simpleQuery" onClick={this.handleEntailmentRequest.bind(this)}>Refresh</Button>
        </div>

        <Employees myEmployees={this.state.employees}></Employees>

      </div>
    );
  }
}
export default View;
