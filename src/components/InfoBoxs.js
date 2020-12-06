import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBoxs.css";
//cardContent gives nice white background for card
function InfoBoxs({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
        //in BEM when the class is modifying we use ---
      } `}
      onClick={props.onClick}
    >
      <CardContent>
        {/* Title Coronavirus cases */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        {/* +120k Number of cases */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        {/* 1.2M Total */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBoxs;
