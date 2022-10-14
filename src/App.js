import logo from './logo.svg';
import './App.css';
import Menu from './select-menu/Menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <p>
          Above is the Select Menu
        </p>
      </header>
    </div>
  );
}

export default App;
