import axios from "axios";
import React, { useState } from "react";
import "./DictionarySearch.css";
import Results from "./Results";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <section className="Form">
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
