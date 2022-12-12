import React, { Component } from "react";
import "bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./MenuComp.css";
import { dishes } from "../shared/Dishes";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <ListGroup>
            <ListGroupItem className="list">
              <img src={dish.image} alt={dish.name} />
              <div className="detail">
                <h2 className="heading">{dish.name}</h2>
                <p className="discription">{dish.description}</p>
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="menu">{menu}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
