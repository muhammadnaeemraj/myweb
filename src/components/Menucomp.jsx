import React, { useState } from "react";
import "bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./MenuComp.css";
import { dishes } from "../shared/Dishes";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const Menu = () => {
  const [dish, setDish] = useState(dishes);
  const [selectedDish, setSelectedDish] = useState(null);

  // will render this funtion on onClick method
  function renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <h2>{dish.name}</h2>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  // all dishes
  const menu = dish.map((d) => {
    return (
      <div key={d.id} className="col-12 m-2">
        <Card
          style={{
            width: "18rem",
          }}
          onClick={() => {
            setSelectedDish(d);
          }} //will change the state of setSelected => (null to dish)
        >
          <img src={d.image} alt={d.name} />
          <CardBody>
            <CardImgOverlay>
              <h5 className="heading">{d.name}</h5>
            </CardImgOverlay>
          </CardBody>
        </Card>
      </div>
    );
  });

  // Main retun function
  return (
    <div className="container">
      <div className="row">
        <div className="menu col">{menu}</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">{renderDish(selectedDish)}</div>
      </div>
    </div>
  );
};

export default Menu;
