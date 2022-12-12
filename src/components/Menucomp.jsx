import React, { Component, useState } from "react";
import "bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./MenuComp.css";
import { dishes } from "../shared/Dishes";

const Menu = () => {
  const [dish, setDish] = useState(dishes);
  const menu = dish.map((d) => {
    return (
      <div key={d.id} className="col-12 mt-5">
        <ListGroup>
          <ListGroupItem className="list">
            <img src={d.image} alt={d.name} />
            <div className="detail">
              <h2 className="heading">{d.name}</h2>
              <p className="discription">{d.description}</p>
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
};

export default Menu;
