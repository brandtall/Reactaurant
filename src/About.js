import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div>
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className='container'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://runforthehills.com/wp-content/uploads/2017/01/kricket-soho-london-bar-restaurant-design-interiors-outside.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Reactaurant</h3>
          <p>We pride ourselves in our unique menu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s3-media3.fl.yelpcdn.com/bphoto/A3DyHpUvw1j7lbM60a_YSA/o.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Flexible hours</h3>
          <p>We are open on busy hours.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/09/23/21/13/restaurant-3698548_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Outdoor dining</h3>
          <p>
            Customers can enjoy the amazing weather as they dine outside.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card className="text-center notice">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Notice!</Card.Title>
    <Card.Text>
      Check our Amazing Menu!
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
<Card className='text-center review'>
  <Card.Header>Reviews</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Amazing food and hospitality. 100% would recommend.{' '}
      </p>
      <footer className="blockquote-footer">
        Me
      </footer>
    </blockquote>
  </Card.Body>
</Card>
<footer className='text-center ending'>Made By: Brandtall</footer>
  </div>
  );
}

export default class About extends Component {
  
  render() {
    return (
      <ControlledCarousel/>
    );
  }
}

