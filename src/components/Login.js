import React, {useRef} from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const getEmail = localStorage.getItem("emailData")
    const handleSubmit = () => {
        if(email.current.value == "guest@gmail.com" && password.current.value == "12345"){
            localStorage.setItem("emailData", "guest@gmail.com")
            localStorage.setItem("passwordData", "12345")
        }
        navigate("/home")
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type='email'
                            placeholder='Enter email'
                            ref={email}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type='password'
                            placeholder='Enter password'
                            ref={password}
                            ></Form.Control>
                        </Form.Group>
                        <Button type='submit' variant='primary'>
                            Sign In
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login