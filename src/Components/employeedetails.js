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
    //Deletes the employee from the database
    DeleteEmployee(e) {
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/employees/" + this.props.employee._id).then().catch();
    
      }

    //Displays the data in the database in a table
    render() {
        return (
            <Table style={{backgroundColor:"white"}} align = "center">
                <TableHead  align = "center">
                    <TableRow style={{backgroundColor:"grey"}} align = "center" >
                        <TableCell style={{fontWeight:"bold"}}  align = "center">Employee ID</TableCell>
                        <TableCell style={{fontWeight:"bold"}} align = "center">First Name</TableCell>
                        <TableCell style={{fontWeight:"bold"}} align = "center">Surname</TableCell>
                        <TableCell style={{fontWeight:"bold"}} align = "center">Department</TableCell>
                        <TableCell style={{fontWeight:"bold"}} align = "center">Position</TableCell>
                        <TableCell style={{fontWeight:"bold"}} align = "center">Salary</TableCell>
                        <TableCell style={{fontWeight:"bold"}} align = "center">Update</TableCell>
                        <TableCell style={{fontWeight:"bold"}} align = "center">Delete</TableCell>                                                
                        <TableCell style={{fontWeight:"bold"}} align = "center">Update Date</TableCell>                                                
                    
                    </TableRow>
                </TableHead>

                <TableBody align = "center">
                    <TableRow style={{backgroundColor:"black"}} align = "center">
                        <TableCell style={{color:"white"}} align = "center">{this.props.employee.empID}</TableCell>                       
                        <TableCell style={{color:"white"}} align = "center">{this.props.employee.firstName}</TableCell>
                        <TableCell style={{color:"white"}} align = "center">{this.props.employee.surname}</TableCell>
                        <TableCell style={{color:"white"}} align = "center">{this.props.employee.department}</TableCell>
                        <TableCell style={{color:"white"}} align = "center">{this.props.employee.position}</TableCell>
                        <TableCell style={{color:"white"}} align = "center">€{this.props.employee.salary}</TableCell>
                        <TableCell style={{color:"white"}} align = "center"><Link to={"/update/"+this.props.employee._id} className = "btn btn-dark">Update</Link></TableCell> 
                        <TableCell style={{color:"white"}} align = "center"><Button variant="danger" onClick={this.DeleteEmployee}>Delete</Button></TableCell> 
                        <TableCell style={{color:"white"}} align = "center">{this.props.employee.updateDate}</TableCell>
                    
                    </TableRow>

                </TableBody>
            </Table>

        );
    }
}
export default EmployeeDetails;