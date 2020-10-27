import React from "react";
import classes from "./card-list.module.css";

import Card from "../card/Card";

export const CardList = (props) => {
  return (
    <div className={classes.cardList}>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
