import React, { Component } from 'react'
import "./index.css"


const Grid = () => {
    return (
    <div className="grid">
        <div className="grid-item">Dish</div>
        <div className="grid-item">Price</div>
        <div className="grid-item">obster Bisque</div>
        <div className="grid-item">$7.95</div>
        <div className="grid-item">French Onion</div>
        <div className="grid-item">$5.95</div>
        <div className="grid-item">Buffalo Wings or Tenders </div>
        <div className="grid-item">$9.95</div>
        <div className="grid-item">Mozzarella Sticks</div>
        <div className="grid-item">$4.95</div>
        <div className="grid-item">Red Hook Ale Battered Popcorn Shrimp</div>
        <div className="grid-item">$8.95</div>
        <div className="grid-item">Onion Rings</div>
        <div className="grid-item">$4.95</div>
    </div>
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