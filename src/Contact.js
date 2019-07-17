import React, { Component } from 'react'


const Info = () => {
    return (
        <h3>You can reach us on: </h3>,
        <p>Email: Reactaurant@example.com<br/>Mobile Phone: +123 456 7890<br/>Follow us on social media</p>
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