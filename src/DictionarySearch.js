import axios from "axios";
import React, { useState } from "react";
import "./DictionarySearch.css";
import Results from "./Results";
import Photos from "./Photos";

export default function DictionarySearch(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function serach() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000014ad5024e78074d59b77d354039f1cdac";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Looking for it...";
  }
}
