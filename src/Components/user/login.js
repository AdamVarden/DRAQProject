import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';

import { Col, FormGroup, Label, Input } from 'reactstrap';

class LogIn extends React.Component {

    constructor(props) {

        super(props);
        this.state = { User: '', Password:''  };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    //Handles Submit
    handleUserChange(e) {
        this.setState({ User: e.target.value });

    }

    handlePasswordChange(e) {
        this.setState({ Password: e.target.value });

    }

    
    handleSubmit(e) {
        e.preventDefault();

        const userObject = {
            user: this.state.User,
            password: this.state.Password,
        }

        //Gets the array for the specific User 
        Axios.get('http://localhost:4000/api/users/'+this.state.User+'/'+this.state.Password,userObject)
        .then(response => {
            //Ensures the there is an array
            if (response.data.length > 0) 
            {
                console.log("Logged In");
                this.props.history.push('/home')
            }
            //Alerts User that input is invalid
            else
            {
                alert("Not logged in");
            }
          })
        .catch();
        
        //Resets the State
        this.setState({
            User: '',
            Password: '',

        });
    }


    render() {
        return (
            <div  className="logIn">
                <h3 >User Login</h3>
                <div >
                    <Form onSubmit={this.handleSubmit}>

                        {/* User Name Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}>

                            <Label sm={2} >User Name</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.User} onChange={this.handleUserChange} />
                            </Col>

                        </FormGroup>

                        {/* User Password Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}>

                            <Label sm={2} >User Password</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.Password} onChange={this.handlePasswordChange} />
                            </Col>

                        </FormGroup>

                        <div>
                            <input
                                type="submit"
                                value="Login"
                            ></input>
                        </div>
                    </Form>

                </div>
            </div>

        );
    }
}

export default LogIn;