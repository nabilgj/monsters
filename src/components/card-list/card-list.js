import React from "react";

import classes from "./card-list.module.css";

export const CardList = (props) => {
  return <div className={classes.cardList}>{props.children}</div>;
};
