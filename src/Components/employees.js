import React from 'react';
import '../App.css';
import EmployeeDetails from './employeedetails';

class Employees extends React.Component {
    render(){
       return this.props.myEmployees.map((employee)=>{

           return <EmployeeDetails key ={employee._id} employee={employee}></EmployeeDetails>
       });
     }
   }
   export default Employees;