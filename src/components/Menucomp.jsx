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
  const [disc, setDisc] = useState(null);
  const menu = dish.map((d) => {
    return (
      <div key={d.id} className="col-12 col-mt-5 m-2">
        <Card
          style={{
            width: "18rem",
          }}
          onClick={() => setDisc(d.description)}
        >
          <img src={d.image} alt={d.name} />
          <CardBody>
            <CardImgOverlay>
              <h5 className="heading">{d.name}</h5>
            </CardImgOverlay>
            <CardTitle>
              <h2 className="heading">{d.name}</h2>
            </CardTitle>
            <CardText>
              <p className="discription">{disc}</p>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="menu col">{menu}</div>
      </div>
    </div>
  );
};

export default Menu;
