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
        <input
          type="search"
          placeholder="Search Student"
          onChange={e => {
            this.setState({ searchField: e.target.value }, () => {
              // If we wanna do something right after we set it, then we have to set it inside the second argument
              // Call "right after setState"
              console.log(this.state);
            });
          }}
        />
        <CardList students={this.state.students} />
      </div>
    );
  }
}

export default App;