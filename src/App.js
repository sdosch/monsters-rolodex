import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import SelectBox from "./components/select-box/select-box-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      teams: [
        { id: 1, name: "robots" },
        { id: 2, name: "monsters" },
        { id: 3, name: "robot heads" },
        { id: 4, name: "cats" }
      ],
      selectedTeam: 1
    };
  }

  handleSearchbox = e => {
    this.setState({ searchField: e.target.value });
  };

  handleSelectBox = selected => {
    this.setState({ selectedTeam: selected });
  };

  displayTeamName = () => {
    return `${this.state.teams[this.state.selectedTeam - 1].name}`;
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>{this.displayTeamName()} Rolodex</h1>
        <SearchBox placeholder={"search"} handleChange={this.handleSearchbox} />
        <SelectBox
          options={this.state.teams}
          onSelectChange={this.handleSelectBox}
        />
        <CardList monsters={filteredMonsters} team={this.state.selectedTeam} />
      </div>
    );
  }
}

export default App;
