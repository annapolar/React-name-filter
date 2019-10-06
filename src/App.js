import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      searchField: "",
      text:""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ students: users }));
  }

  handelChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { students, searchField } = this.state;
    const filterStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Student List</h1>
        <h2>You search: {searchField}</h2>
        <SearchBox
          placeholder="Search Student"
          handelChange={this.handelChange}
        />
        <CardList students={filterStudents} />
      </div>
    );
  }
}

export default App;
