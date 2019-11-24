import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, FormGroup, Label, Input, } from 'reactstrap';

class AddUser extends React.Component {

    constructor(props) {

        super(props);
        this.state = { User: '', Password:''  };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleUserChange(e) {
        this.setState({ User: e.target.value });

    }

    handlePasswordChange(e) {
        this.setState({ Password: e.target.value });

    }

    handleSubmit(e) {
        alert(this.state.User + "   " + this.state.Password );
        e.preventDefault();

        const userObject = {
            user: this.state.User,
            password: this.state.Password,
        }

        Axios.post('http://localhost:4000/api/user', userObject)
            .then()
            .catch();

        this.setState({
            User: '',
            Password: '',

        });
    }

    render() {
        return (
            <div className="App">
                <h3 >Add User</h3>
                <div>
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
                                value="Add Employee"
                            ></input>
                        </div>
                    </Form>

                </div>
            </div>

        );
    }
}

export default AddUser;