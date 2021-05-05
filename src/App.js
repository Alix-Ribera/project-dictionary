import "./App.css";
import DictionarySearch from "./DictionarySearch";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>A:</h1>
        <header>
          Reference publication listing words or terms with their meanings and
          parts of speech, with a guide to accepted pronunciation, derived words
          of different parts of speech, and etymologies.
        </header>
        <main>
          <DictionarySearch defaultKeyword="Dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/Alix-Ribera/project-dictionary">
              Open-source code{" "}
            </a>
            : by&nbsp;
            <a href="https://alixribera.wixsite.com/portfolio/cv">
              Alix Simo Ribera
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
