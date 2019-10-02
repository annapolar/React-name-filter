import React from "react";
import "./card.scss";

export const Card = props => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.student.id}?set=set2&size=180x180`}
      alt="student"
    />
    <h2>{props.student.name}</h2>
    <p>{props.student.email}</p>
  </div>
);
