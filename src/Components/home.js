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
        </p>
      </div>
    );
  }
}
export default Home;
