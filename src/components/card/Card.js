import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

// into card list
export default Card;
