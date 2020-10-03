import React from "react";

class Search extends React.Component {
  state = {
    searchValue: "",
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.handleBtnClick(this.state.searchValue);
    }
  };
  render() {
    return (
      <div
        className="field is-grouped"
        style={{ width: "50%", margin: "20px auto" }}
      >
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            value={this.state.searchValue}
            onChange={(e) => this.setState({ searchValue: e.target.value })}
            onKeyPress={this.handleKeyPress}
            placeholder="Search an article"
          />
        </p>
        <p className="control">
          <a
            className="button is-info searchBtn"
            onClick={(term) =>
              this.props.handleBtnClick(this.state.searchValue)
            }
          >
            Search
          </a>
        </p>
      </div>
    );
  }
}
export default Search;
