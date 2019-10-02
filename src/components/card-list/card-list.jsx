import React from "react";
import { Card } from "../card/card";
import "./card-list.scss";

export const CardList = props => (
  <div className="card-list">
    {props.students.map(student => (
      <Card key={student.id} student={student} />
    ))}
  </div>
);
