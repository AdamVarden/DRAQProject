import React from 'react';
import '../App.css';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, FormGroup, Label, Input, } from 'reactstrap';

class Add extends React.Component {

    constructor(props) {

        super(props);
        this.state = {EmpID:'', FirstName: '',Surname:'', Department: '', Position: '', Salary: '',_id:'', UpdateDate:'Unedited' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmpIDChange = this.handleEmpIDChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handlePositonChange = this.handlePositonChange.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.handleUpdateDateChange = this.handleUpdateDateChange.bind(this);

    }

    //Handles the Submit
    handleEmpIDChange(e) {
        this.setState({ EmpID: e.target.value });

    }

    handleFirstNameChange(e) {
        this.setState({ FirstName: e.target.value });

    }

    handleSurnameChange(e) {
        this.setState({ Surname: e.target.value });

    }

    handleDepartmentChange(e) {
        this.setState({ Department: e.target.value });
    }

    handlePositonChange(e) {
        this.setState({ Position: e.target.value });
    }

    handleSalaryChange(e) {
        this.setState({ Salary: e.target.value });
    }

    handleUpdateDateChange(e){
        this.setState({ UpdateDate: e.target.value });

    }   

    handleSubmit(e) {
        e.preventDefault();

        const employeeObject = {
            empID: this.state.EmpID,
            firstName: this.state.FirstName,
            surname: this.state.Surname,
            department: this.state.Department,
            position: this.state.Position,
            salary: this.state.Salary,
            updateDate: this.state.UpdateDate
        }

        //Posts the new Employee with their Details
        Axios.post('http://localhost:4000/api/employees', employeeObject)
            .then()
            .catch();

        //Resets the State
        this.setState({
            EmpID: '',            
            FirstName: '',
            Surname: '',
            Department: '',
            Position: '',
            Salary: '',
            UpdateDate:'0'
            
        });
    }

    //Gets the input from user
    render() {
        return (
            <div className="App">
                <h3 >Add Employee to Database</h3>
                <div>
                    <Form onSubmit={this.handleSubmit}>

                        {/* Employee ID Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee ID</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.EmpID} onChange={this.handleEmpIDChange} />
                            </Col>
                        
                        </FormGroup>                       
                       
                        {/* First Name Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee First Name</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.FirstName} onChange={this.handleFirstNameChange} />
                            </Col>
                        
                        </FormGroup>
                        
                        {/* Surname Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee Surname</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.Surname} onChange={this.handleSurnameChange} />
                            </Col>
                        
                        </FormGroup>
                        
                        {/* Deparment Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee Department</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control'  value={this.state.Department} onChange={this.handleDepartmentChange} />
                            </Col>
                        
                        </FormGroup>
                        
                        {/* Position Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee Position</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control'  value={this.state.Position} onChange={this.handlePositonChange} />
                            </Col>
                        
                        </FormGroup>
                        
                        {/* Salary Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee Salary</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control'  value={this.state.Salary} onChange={this.handleSalaryChange} />
                            </Col>
                        
                        </FormGroup>                                                 
                        {
                        /* Submit Inputs Button */}
                        <div>
                        <input
                            type="submit"
                            value="Add Employee"
                        ></input>
                    </div>                   
                    </Form>

                </div>
            </div>

        );
    }
}

export default Add;