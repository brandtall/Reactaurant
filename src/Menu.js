import React, { Component } from 'react'
import "./index.css"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'


const Grid = () => {
    return (
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://www.budgetbytes.com/wp-content/uploads/2018/04/The-Best-Weeknight-Pasta-Sauce-plate-H1.jpg" height = '400px'/>
          <Card.Body>
            <Card.Title>Pasta</Card.Title>
            <Card.Text>
            Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta.
            </Card.Text>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Price: $$</ListGroupItem>
                <ListGroupItem>Ready in: 20mins</ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="http://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg" height = '400px' />
          <Card.Body>
            <Card.Title>Pizza</Card.Title>
            <Card.Text>
            A pizza is a flat, round piece of dough covered with tomatoes, cheese, and other savoury food, and then baked in an oven.
            </Card.Text>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Price: $$</ListGroupItem>
                <ListGroupItem>Ready in: 40mins</ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.tasteofhome.com/wp-content/uploads/2018/05/Parmesan-Risotto_EXPS_HPLBZ18_33569_B05_18_5b-696x696.jpg" height = '400px' />
          <Card.Body>
            <Card.Title>Risotto</Card.Title>
            <Card.Text>
            Risotto is an Italian dish consisting of rice cooked with ingredients such as tomatoes, meat, or fish.
            </Card.Text>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Price: $$</ListGroupItem>
                <ListGroupItem>Ready in: 30mins</ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card><br/>
        

        
      </CardGroup>
    );
}


class Menu extends Component {
    render() {
        return (
            <Grid />
        );
    }
}

export default Menu