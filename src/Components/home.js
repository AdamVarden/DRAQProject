import React from 'react';
import '../App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 >Welcome to the Employees Database</h1>
        <p>
          Here you find all information about all Employees.
          <br></br>
          In the Employees Links you will find links to view all employees,
          <br></br>          
          where you have the option to add, delete and update the employees within the database.
          <br></br> 
          <h3>Employees Links</h3> 
          In this section you can view the employees in the database. You can add, update and delete employees.
          <br></br>          
          <h3>User Links</h3>  
          In this section you can add users who can access the Database. 
          <br></br>          
          If a user forgets their password as long as they remember their user name they can change both password and user name.
          <br></br>          
        </p>
      </div>
    );
  }
}
export default Home;
