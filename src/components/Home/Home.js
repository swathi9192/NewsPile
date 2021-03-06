import React from "react";
import Search from "./Search";
import API from "../../api";
import "./Home.sass";

class Home extends React.Component {
  state = {
    searchData: [],
  };
  searchResultsMapper = (data) => {
    this.setState({
      searchData: data
        .slice(0, 8)
        .filter(({ abstract, headline }) => {
          return abstract !== "" && headline !== "";
        })
        .map(({ abstract, headline, web_url, _id }) => {
          const idIndex = _id.lastIndexOf("/");
          const key = _id.substring(idIndex + 1);
          return (
            <div className="tile is-3 is-parent " key={key}>
              <div className="tile is-child box">
                <div style={{ height: "260px", overflow: "hidden" }}>
                  <p className="title">
                    {headline.print_headline
                      ? headline.print_headline
                      : headline.main}
                  </p>
                  <p>{abstract}</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <a href={web_url} target="_blank">
                    Read the article
                  </a>
                </div>
              </div>
            </div>
          );
        }),
    });
  };
  handleBtnClick = async () => {
    if (this.state.searchValue === "") this.handleOnLoad();
    else {
      const response = await API.get(
        `search/v2/articlesearch.json?q=${this.state.searchValue}`
      );

      this.searchResultsMapper(response.data.response.docs);
    }
  };

  handleOnLoad = async () => {
    const response = await API.get(`mostpopular/v2/viewed/1.json`);
    const results = response.data.results;
    const data = results.map((result) => {
      return {
        abstract: result.abstract,
        headline: { print_headline: result.title },
        web_url: result.url,
        _id: result.uri,
      };
    });
    this.searchResultsMapper(data);
  };

  componentDidMount() {
    this.handleOnLoad();
  }
  render() {
    return (
      <section className="section is-light homeCmpnt">
        <Search onClick={(term) => this.handleBtnClick(term)}></Search>
        <div
          className="tile is-ancestor"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {this.state.searchData}
        </div>
      </section>
    );
  }
}

export default Home;
