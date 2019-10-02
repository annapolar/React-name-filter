import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ students: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList students={this.state.students}/>
      </div>
    );
  }
}

export default App;
