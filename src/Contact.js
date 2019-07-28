import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Info = () => {
    return (
<Form>
    <Form.Group controlId="formGroupName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
    </Form.Group>
    <Form.Group controlId="formGroupEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="Email" placeholder="Enter email" />
    </Form.Group>
    <Button type="submit">Submit form</Button>
</Form>
    );
}

class Contact extends Component {
    render() {
        return (
            <Info />
        );
    }
}

export default Contact