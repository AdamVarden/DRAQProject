import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import { Col, FormGroup, Label, Input } from 'reactstrap';

class LogIn extends React.Component {

    constructor(props) {

        super(props);
        this.state = { User: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);

    }

    //Handling the Submits
    handleUserChange(e) {
        this.setState({ User: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const userObject = {
            user: this.state.User,
        }


        Axios.get('http://localhost:4000/api/users/' + this.state.User, userObject)
            .then(response => {
                //Making sure an array exists and pushes to the changeUserDetails
                if (response.data.length > 0) {

                    this.props.history.push('/user/changeUserDetails/' + this.state.User)
                }
                //Resets the state and Alerts the user
                else {
                    alert("Not a Valid Username");
                    this.setState({
                        User: '',

                    });
                }
            })
            .catch();


    }

    //Getting User Details
    render() {
        return (
            <div className="App">
                <h3 >User Name </h3>
                <div >
                    <Form onSubmit={this.handleSubmit}>

                        {/* User Name Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}>

                            <Label sm={2} >User Name</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.User} onChange={this.handleUserChange} />
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