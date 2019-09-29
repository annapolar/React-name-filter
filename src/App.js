import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          name: "Anna Huang",
          id: "001"
        },
        {
          name: "Finley Lu",
          id: "002"
        },
        {
          name: "Andrew Kaliel",
          id: "003"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
       {
         this.state.students.map(student => 
          <h1 key={student.id}>{student.name}</h1>
          )
       }
      </div>
    );
  }
}

export default App;