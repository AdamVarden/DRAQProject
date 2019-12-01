import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';

import { Col, FormGroup, Label, Input } from 'reactstrap';

class ChangeUserDetails extends React.Component {

    constructor(props) {

        super(props);
        this.state = { User: '', Password: '', oldUserName: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    //Handling the Change
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


        Axios.put('http://localhost:4000/api/users/' + this.state.oldUserName, userObject)
            .then()
            .catch();

    }

    componentDidMount() {

        Axios.get('http://localhost:4000/api/users/' + this.props.match.params.user)
            .then((response) => {
                
                this.setState({
                    oldUserName: response.data.user,
                    User: response.data.user,
                    Password: response.data.password
                })

                console.log(this.props.match.params.user);
            })
            .catch()

    }

    //Getting the users Details
    render() {
        return (
            <div className="logIn">
                <h3 >Edit Your User Login</h3>
                <div >
                    <Form onSubmit={this.handleSubmit}>

                        {/* User Name Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}>

                            <Label sm={2} >Change User Name</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.User} onChange={this.handleUserChange} />
                            </Col>

                        </FormGroup>

                        {/* User Password Input */}
                        <FormGroup row className='form-group' onSubmit={this.handleSubmit}>

                            <Label sm={2} >Change Password</Label>
                            <Col sm={5}>
                                <Input type='text' className='form-control' value={this.state.Password} onChange={this.handlePasswordChange} />
                            </Col>

                        </FormGroup>

                        <div>
                            <input
                                type="submit"
                                value="Update"
                            ></input>
                        </div>
                    </Form>

                </div>
            </div>

        );
    }
}

export default ChangeUserDetails;