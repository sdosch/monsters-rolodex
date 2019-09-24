import React, { Component } from "react";
import "./select-box.styles.css";

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1
    };
  }

  handleSelectChange = selected => {
    this.setState({ selected: selected });
    this.props.onSelectChange(selected);
  };

  render() {
    return (
      <select
        className="select"
        value={this.state.selected}
        onChange={e => this.handleSelectChange(e.target.value)}
      >
        {this.props.options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectBox;
