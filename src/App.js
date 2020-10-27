import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChanged = this.handleChanged.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return this.setState({ monsters: users });
      });
  }

  handleChanged = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChanged={this.handleChanged}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
