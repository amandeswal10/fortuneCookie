import './App.css';
import  wallpaper from './fortune_cookie.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wallpaper} className="App-logo" alt="logo" />
        <p>
          Coming Soon
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Fortune_cookie"
          target="_blank"
          rel="noopener noreferrer"
        >
        What is a Fortune Cookie?
        </a>
      </header>
    </div>
  );
}

export default App;
