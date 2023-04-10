import React from 'react'
import './RegisterScreen.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MainScreen from '../../components/Mainscreen'
const RegisterScreen = () => {
  return (
        <MainScreen title = "SignUp" >
        <Form>
        <Form.Group className="mb-3"  style={{margin:40+'px '+0+'px'}} controlId="formBasic">
            <Form.Label>Username</Form.Label>
            <Form.Control className="inp" type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" style={{margin:40+'px '+0+'px'}}controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="inp" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" style={{margin:40+'px '+0+'px'}}controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="inp" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" style={{margin:40+'px '+0+'px'}}controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button style={{margin:30+'px '+0+'px'}}variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </MainScreen>)
}

export default RegisterScreen