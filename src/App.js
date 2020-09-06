import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [articleList, setArticleList] = useState(articles);

  const sortByDate = () => {
    const arr = [...articleList];

    arr.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      return aDate < bDate ? 1 : -1;
    });

    setArticleList(arr);
  };

  const sortByVotes = () => {
    const arr = [...articleList];

    arr.sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1));

    setArticleList(arr);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          onClick={sortByVotes}
          className="small"
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          onClick={sortByDate}
          className="small"
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articleList} />
    </div>
  );
}

export default App;
