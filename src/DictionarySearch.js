import axios from "axios";
import React, { useState } from "react";
import "./DictionarySearch.css";
import Results from "./Results";

export default function DictionarySearch(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function serach() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    serach();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    serach();
  }
  if (loaded) {
    return (
      <div className="DictionarySearch">
        <section className="Form">
          <h3>What are you curious about today?</h3>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
            <div className="hint">
              Type anything and I'll give you the meaning
            </div>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Looking for it...";
  }
}
