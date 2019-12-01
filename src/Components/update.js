import React from 'react';
import '../App.css';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, FormGroup, Label, Input, } from 'reactstrap';

class Update extends React.Component {

    constructor(props) {

        super(props);
        this.state = {EmpID:'', FirstName: '',Surname:'', Department: '', Position: '', Salary: '',_id:'', UpdateDate:'' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmpIDChange = this.handleEmpIDChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handlePositonChange = this.handlePositonChange.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.handleUpdateDateChange = this.handleUpdateDateChange.bind(this);

        this.state = {time:new Date()};

    }

    //Hand the Submits
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
        this.setState({ UpdateDate: e.target.value});

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
            updateDate: this.state.time.toLocaleDateString()
        }

        //Puts the new Information up to the database
        Axios.put('http://localhost:4000/api/employees/'+this.state._id,employeeObject)
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
            UpdateDate: this.state.time.toLocaleDateString()
        });

    }

    componentDidMount() {

        Axios.get('http://localhost:4000/api/employees/' + this.props.match.params.id)
        .then((response)=>{
            //Sets the state received from the database
            this.setState({
                _id:response.data._id,
                EmpID:response.data.empID,
                FirstName:response.data.firstName,
                Surname:response.data.surname,
                Department:response.data.department,
                Position:response.data.position,
                Salary:response.data.salary,   
                UpdateDate:response.data.updateDate             

            })
        })
        .catch()
    }

    //Gets the new details for the employee
    render() {
        return (
            <div className="App">
                <h3 >Update Employee to Database</h3>
                <div>
                    <Form onSubmit={this.handleSubmit}>

                        {/* Employee ID Update */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee ID</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.EmpID} onChange={this.handleEmpIDChange} />
                            </Col>
                        
                        </FormGroup>                       
                       
                        {/* First Name Update */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee First Name</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.FirstName} onChange={this.handleFirstNameChange} />
                            </Col>
                        
                        </FormGroup>
                        
                        {/* Surname Update */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee Surname</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.Surname} onChange={this.handleSurnameChange} />
                            </Col>
                        
                        </FormGroup>
                        
                        {/* Deparment Update */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee Department</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control'  value={this.state.Department} onChange={this.handleDepartmentChange} />
                            </Col>
                        
                        </FormGroup>
                        
                        {/* Position Update */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee Position</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control'  value={this.state.Position} onChange={this.handlePositonChange} />
                            </Col>
                        
                        </FormGroup>
                        
                        {/* Salary Update */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Employee Salary</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control'  value={this.state.Salary} onChange={this.handleSalaryChange} />
                            </Col>
                        
                        </FormGroup>                                                 
                        
                        {/* Update Date  */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}> 
                       
                            <Label sm={2} >Updated Date</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control'  value={this.state.time.toLocaleDateString()} onChange={this.handleUpdateDateChange} />
                            </Col>
                        
                        </FormGroup> 
                        <div>
                        <input
                            type="submit"
                            value="Edit Employee"
                        ></input>
                    </div>                   
                    </Form>

                </div>
            </div>

        );
    }
}

export default Update;