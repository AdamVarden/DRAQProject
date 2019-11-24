import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class EmployeeDetails extends React.Component {

    constructor(){
        super();
        this.DeleteEmployee = this.DeleteEmployee.bind(this);

    }

    DeleteEmployee(e) {
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/employees/" + this.props.employee._id).then().catch();
    
      }


    render() {
        return (
            <Table align = "center">
                <TableHead align = "center">
                    <TableRow align = "center" >
                        <TableCell align = "center">Employee ID</TableCell>
                        <TableCell align = "center">First Name</TableCell>
                        <TableCell align = "center">Surname</TableCell>
                        <TableCell align = "center">Department</TableCell>
                        <TableCell align = "center">Position</TableCell>
                        <TableCell align = "center">Salary</TableCell>
                        <TableCell align = "center">Update</TableCell>
                        <TableCell align = "center">Delete</TableCell>                                                
                    </TableRow>
                </TableHead>

                <TableBody align = "center">
                    <TableRow align = "center">
                        <TableCell align = "center">{this.props.employee.empID}</TableCell>                       
                        <TableCell align = "center">{this.props.employee.firstName}</TableCell>
                        <TableCell align = "center">{this.props.employee.surname}</TableCell>
                        <TableCell align = "center">{this.props.employee.department}</TableCell>
                        <TableCell align = "center">{this.props.employee.position}</TableCell>
                        <TableCell align = "center">€{this.props.employee.salary}</TableCell>
                        <TableCell align = "center"><Link to={"/update/"+this.props.employee._id} className = "btn btn-dark">Update</Link></TableCell> 
                        <TableCell align = "center"><Button variant="danger" onClick={this.DeleteEmployee}>Delete</Button></TableCell> 
                    </TableRow>

                </TableBody>
            </Table>

        );
    }
}
export default EmployeeDetails;