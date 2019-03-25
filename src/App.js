import React from "react";
import "./App.scss";

export default class App extends React.Component {
  state = {
    selections: [],
    selectedId: "0"
  };

  componentDidMount = () => {
    fetch("./selections.json")
      .then(res => res.json())
      .then(data => this.setState({ selections: data.selections }));
  };

  handleChange = e => {
    this.setState({ selectedId: e.target.value });
  };

  render() {
    const { selections, selectedId } = this.state;
    return (
      <>
        <select onChange={this.handleChange} className="primary-select">
          {selections.map(option => (
            <option key={option.id} value={option.id}>
              {option.primary}
            </option>
          ))}
        </select>
        <select>
          {selections.map(
            item =>
              selectedId === item.id &&
              item.subSelections.map(sub => (
                <option key={sub.id}>{sub.label}</option>
              ))
          )}
        </select>
      </>
    );
  }
}
