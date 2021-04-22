import "./App.css";
import DictionarySearch from "./DictionarySearch";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary app</header>
        <main>
          <DictionarySearch />
        </main>
        <footer className="App-footer">
          <small>Coded by Alix Simo</small>
        </footer>
      </div>
    </div>
  );
}
