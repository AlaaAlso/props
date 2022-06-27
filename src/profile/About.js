import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProFilee = (props) => {
  const myclick = (fullname) => {
    alert(fullname);
  };
  return (
    <Card className="cardinfo">
      {
        <Card.Img
          src="./Orange.png"
          style={{ width: "300px" }}
          className="imgedit"
          alt="logo"
        />
      }
      <Card.Body>
        <Card.Title className="fullname">{props.fullname}</Card.Title>
        <Card.Text>{props.profession}</Card.Text>
        <Card.Text>{props.bio}</Card.Text>
        <Card.Text className="child">{props.children}</Card.Text>
        <Button variant="danger" onClick={() => myclick(props.fullname)}>
          {" "}
          see more
        </Button>
      </Card.Body>
    </Card>
  );
};
ProFilee.defaultProps = {
  name: "ali",
};
ProFilee.prototype = {
  name: PropTypes.string,
};
export default ProFilee;
